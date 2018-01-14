import React from 'react'

import { push } from 'root/actions'
import { productShow, productUpdate } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { Button, Spin } from 'antd'
import ViewEdit from 'components/ViewEdit'
import ProductEditForm from '../components/ProductEditForm'

const productCodeSelector = state => state.ui.products.show.product
const entitiesProductsSelector = state => state.entities.products
const productSelector = createSelector(
    productCodeSelector,
    entitiesProductsSelector,
    (code, products) => products ? products[code] : null
)

export class ProductShow extends React.Component {

    componentDidMount() {
        this.props.actions.productShow({code : this.props.match.params.product})
    }

    componentWillUnmount() {
        //this.props.actions.uiClear()
    }

    render() {
        if(this.props.loading) {
            return <Spin />
        } else {
            return (
                <div className="container-fluid">
                    <div style={{display:'flex'}}>
                        <h1 style={{flex: '1 1 0'}}>
                            <i className="fa fa-tag"></i>
                            &nbsp;
                            <span>{this.props.product.name}</span>
                        </h1>
                    </div>
                    <ViewEdit
                        editing={this.props.editing}
                        viewer={() => (
                            <div>
                                <Button icon="edit" onClick={()=>this.handleEditProduct()}>Edit</Button>
                            </div>
                        )}
                        editor={() => (
                            <ProductEditForm
                                form="product-edit-form"
                                initialValues={this.props.product}
                                onSubmit={(values) => this.handleUpdateProduct(values)} 
                                onCancel={() => this.handleCancel()}
                            />
                        )}
                    />
                </div>
            )
        }
    }

    handleEditProduct() {
        this.props.actions.push(`/products/${this.props.product.code}/edit`)
    }

    handleUpdateProduct(values) {
        this.props.actions.productUpdate(values)
    }

    handleCancel(values) {
        this.props.actions.push(`/products/${this.props.product.code}`)
    }

}

export default connect(
    
    (state) => {

        if(state.ui.products.show.loading) {
            return state.ui.products.show
        } else {
            return {
                ...state.ui.products.show,
                product: productSelector(state),
                editing: /\/products\/.*\/edit/.test(state.router.location.pathname)
            }
        }
        
    },
    (dispatch) => {
        return {
            actions: bindActionCreators({
                push,
                productShow, productUpdate
            }, dispatch)
        }
    }

)(ProductShow)