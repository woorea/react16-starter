import React from 'react'

import { Route, Switch } from 'react-router'

import { Link } from 'react-router-dom'

import { ConnectedRouter as Router } from 'react-router-redux'

import productRoutes from 'root/modules/products/routes'

import { history } from 'root/objects'

import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout

import { uiToggleSidebar } from 'root/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Dashboard from 'root/containers/Dashboard'

export class Application extends React.Component {

    handleToggleSidebar() {
        this.props.actions.uiToggleSidebar()
    }

    render() {
        return (
            <Router history={history}>
                <Layout style={{height:"100vh"}}>
                    <Sider
                    trigger={null}
                    collapsible
                    collapsed={!this.props.isSidebarOpen}
                    >
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="inline"
                            selectedKeys={this.props.sidebarSelected}
                            defaultSelectedKeys={['dashboard']}
                        >
                            <Menu.Item key="dashboard">
                                <Link to="/">
                                    <Icon type="dashboard" />
                                    <span>Dashboard</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="products">
                                <Link to="/products">
                                    <Icon type="tags" />
                                    <span>Products</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ height: '100vh' }}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.props.isSidebarOpen ? 'menu-fold' : 'menu-unfold'}
                            onClick={() => this.handleToggleSidebar()}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
                        <Switch>
                            <Route exact path="/" component={ Dashboard } />
                            {productRoutes}
                        </Switch>
                    </Content>
                    </Layout>
                </Layout>
            </Router> 
        )
    }
}

export default connect(
    
    (state) => {

        return {
            sidebarSelected: [state.application.section],
            isSidebarOpen: state.application.isSidebarOpen
        }

    },
    (dispatch) => {

        return {
            actions: bindActionCreators({
                uiToggleSidebar
            }, dispatch)
        }
    }

)(Application)