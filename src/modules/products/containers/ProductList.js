import React from 'react'

import { push, uiSetSection, uiClear, uiModalOpen, uiModalClose } from 'root/actions'
import { productList, productDelete } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { Button, Table, Modal } from 'antd'

const uiItemsSelector = state => state.ui.products.list.items
const entitiesProductsSelector = state => state.entities.products || {}
const productsSelector = createSelector(
    uiItemsSelector,
    entitiesProductsSelector,
    (items, products) => items.map(it => products[it])
)

export class ProductList extends React.Component {

    componentDidMount() {
        this.props.actions.uiSetSection({section : 'products'})
        this.props.actions.productList()
    }

    componentWillUnmount() {
        this.props.actions.uiClear()
    }

    render() {

        const columns = [
            {
                title: 'Code',
                dataIndex: 'code',
                key: 'code'
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Start',
                dataIndex: 'start',
                key: 'start'
            },
            {
                title: 'End',
                dataIndex: 'end',
                key: 'end'
            },
            {
                title: 'Actions',
                render: (product) => {
                    return(
                        <React.Fragment>
                            <Button icon="eye" label="View" onClick={()=>this.handleViewProduct(product)} />
                            &nbsp;
                            <Button icon="delete" label="Delete" color="danger" onClick={()=>this.handleDeleteProduct(product)} />
                        </React.Fragment>
                    )
                }
            }
        ]
        
        return (
            <React.Fragment> 
                <div style={{display:'flex'}}>
                    <h1 style={{flex: '1 1 0'}}>
                        <i className="fa fa-tags"></i>
                        &nbsp;
                        <span>Products</span>
                    </h1>
                    <div style={{flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button type="primary" onClick={()=>this.handleCreateProduct()}>Create a product</Button>
                    </div>
                </div>
                <Table dataSource={this.props.products} columns={columns} rowKey="code" loading={this.props.loading}/>
                <Modal
                    visible={this.props.modal !== null}
                    onOk={(e) => this.handleOkModal()} 
                    onCancel={(e) => this.handleCancelModal()} 
                >
                    <span>Are you sure?</span>
                </Modal>
            </React.Fragment>
        )
    }

    handleCreateProduct() {
        this.props.actions.push('/products/create')
    }

    handleViewProduct(product) {
        this.props.actions.push(`/products/${product.code}`)
    }

    handleDeleteProduct(product) {
        this.props.actions.uiModalOpen(product)
    }

    handleOkModal() {
        this.props.actions.productDelete(this.props.modal)
    }

    handleCancelModal() {
        this.props.actions.uiModalClose()
    }

}

export default connect(
    
    (state) => {
        
        return {
            ...state.ui.products.list,
            products: productsSelector(state),
            modal: state.modal
        }

    },
    (dispatch) => {

        return {
            actions: bindActionCreators({
                push, uiSetSection, uiClear, uiModalOpen, uiModalClose,
                productList, productDelete
            }, dispatch)
        }
    }

)(ProductList)