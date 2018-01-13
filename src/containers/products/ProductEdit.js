import React from 'react'

import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText'
import { TextArea } from '../../components/TextArea';
  
const ProductEditForm = reduxForm({})(({onCancel: handleCancel, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field id="product-name" label="Name" name="name" component={InputText} />
            <Field id="product-description" label="Description" name="description" component={TextArea} />
            <Field id="product-code" label="Code" name="code" component={InputText} />
            <Field id="product-start" label="Start Date" name="start" component={InputText} />
            <Field id="product-end" label="Start End" name="start" component={InputText} />
            <Button type="submit" label="Cancel" onClick={handleCancel} />
            &nbsp;
            <Button type="submit" icon="save" label="Update" />
        </form>
    )
})

export class ProductEdit extends React.Component {

    componentDidMount() {
        this.props.actions.productShow('product.1')
    }

    handleSubmit(values) {
        this.props.actions.productUpdate(values)
    }

    handleCancel(values) {
        this.props.actions.push(`/products/${this.props.product.code}`)
    }

    render() {
        return (
            <div className="container-fluid">
                
                <div style={{display:'flex'}}>
                    <h1 style={{flex: '1 1 0'}}>
                        <i className="fa fa-tag"></i>
                        &nbsp;
                        <span>Edit Product</span>
                    </h1>
                </div>
                <ProductEditForm
                    form="product-edit-form"
                    initialValues={this.props.product}
                    onSubmit={(values) => this.handleSubmit(values)} 
                    onCancel={() => this.handleCancel()}
                />
            </div>
        )
    }

}

export default connect(
    
    (state) => {

        if(state.ui) {
        
            return {
                loading: state.ui.loading,
                product: state.entities.products[state.ui.item]
            }
       
        } else {

            return {
                loading: false,
                products: {},
                modal: null
            }

        }

    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }

)(ProductEdit)