import './styles.scss';

import 'rxjs'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'

import { Link } from 'react-router-dom'

import { Provider } from 'react-redux'

import { ConnectedRouter as Router } from 'react-router-redux'

import { Welcome } from 'root/components/Welcome'

import productRoutes from 'root/modules/products/routes'

import { store, history } from './objects'

import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout;

store.dispatch({type: 'PING'})

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Layout style={{height:"100vh"}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={false}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
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
              type={false ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
              <Switch>
                <Route exact path="/" component={ Welcome } />
                {productRoutes}
              </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  </Provider>
), document.getElementById('root'));