import React from 'react'

import { push, uiClear, uiModalOpen, uiModalClose } from 'root/actions'
import { productList, productDelete } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { Link } from 'react-router-dom'

import { Loading } from 'components/Loading'
import { Button } from 'components/Button'
import { Pagination } from 'components/Pagination'

import Modal from 'containers/Modal'

const uiItemsSelector = state => state.ui.products.list.items
const entitiesProductsSelector = state => state.entities.products || {}
const productsSelector = createSelector(
    uiItemsSelector,
    entitiesProductsSelector,
    (items, products) => items.map(it => products[it])
)

export class ProductList extends React.Component {

    componentDidMount() {
        this.props.actions.productList()
    }

    componentWillUnmount() {
        this.props.actions.uiClear()
    }

    render() {
        
        if(this.props.loading) {
            return <Loading />
        }

        if(this.props.products) {
            return this.renderTable()
        }

        return null
    }

    renderTable() {
        return (
            <div className="container-fluid"> 
                <div style={{display:'flex'}}>
                    <h1 style={{flex: '1 1 0'}}>
                        <i className="fa fa-tags"></i>
                        &nbsp;
                        <span>Products</span>
                    </h1>
                    <div style={{flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button icon="plus" label="Create a product" onClick={()=>this.handleCreateProduct()}/>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Code</th>
                            <th width="50%">Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => {
                            return (
                                <tr key={product.code}>
                                    <td>{product.code}</td>
                                    <td>{product.name}</td>
                                    <td style={{whiteSpace:'nowrap'}}>
                                        <Button icon="eye" label="View" onClick={()=>this.handleViewProduct(product)} />
                                        &nbsp;
                                        <Button icon="trash" label="Delete" color="danger" onClick={()=>this.handleDeleteProduct(product)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Pagination />
                <Modal content={this.props.modal} onEvent={(e) => this.handleModalEvent(e)} />
                <Link to="/">Welcome</Link>
            </div>
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

    handleModalEvent(event) {
        switch(event.type) {
            case 'UI/MODAL/CLOSE': {
                this.props.actions.uiModalClose()
                break
            }
            case 'UI/MODAL/SUBMIT': {
                this.props.actions.productDelete()
                break
            }
        }
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
                push, uiClear, uiModalOpen, uiModalClose,
                productList, productDelete
            }, dispatch)
        }
    }

)(ProductList)