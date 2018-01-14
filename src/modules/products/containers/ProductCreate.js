import React from 'react'

import { push, uiClear } from 'root/actions'
import { productSave } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import ProductCreateForm from '../components/ProductCreateForm'

export class ProductCreate extends React.Component {

    componentWillUnmount() {
        this.props.actions.uiClear()
    }

    render() {
        return (
            <React.Fragment>
                <div style={{display:'flex'}}>
                    <h1 style={{flex: '1 1 0'}}>
                        <i className="fa fa-tag"></i>
                        &nbsp;
                        <span>Create Product</span>
                    </h1>
                </div>
                <ProductCreateForm
                    form="product-create-form"
                    onSubmit={(values) => this.handleSubmit(values)} 
                    onCancel={() => this.handleCancel()}
                />
            </React.Fragment>
        )
    }

    handleSubmit(values) {
        console.log(values)
        this.props.actions.productSave(values)
    }

    handleCancel(values) {
        this.props.actions.push('/products')
    }

}

export default connect(
    
    (state) => {

        return state.ui.products.create

    },
    (dispatch) => {
        return {
            actions: bindActionCreators({
                push, uiClear,
                productSave
            }, dispatch)
        }
    }

)(ProductCreate)