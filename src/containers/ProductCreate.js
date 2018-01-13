import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import * as actions from '../actions'
import { Button } from '../components/Button'
import { InputText } from '../components/InputText'
import { TextArea } from '../components/TextArea';
  
const ProductCreateForm = reduxForm({})(({onCancel: handleCancel, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field id="product-name" label="Name" name="name" component={InputText} />
            <Field id="product-description" label="Description" name="description" component={TextArea} />
            <Field id="product-code" label="Code" name="code" component={InputText} />
            <Field id="product-start" label="Start Date" name="start" component={InputText} />
            <Field id="product-end" label="Start End" name="start" component={InputText} />
            <Button type="submit" label="Cancel" onClick={handleCancel} />
            &nbsp;
            <Button type="submit" icon="save" label="Save" />
        </form>
    )
})

export class ProductCreate extends React.Component {

    handleSubmit(values) {
        this.props.actions.productSave(values)
    }

    handleCancel(values) {
        this.props.actions.push('/products')
    }

    render() {
        return (
            <div className="container-fluid">
                
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
            </div>
        )
    }

}

export default connect(
    
    (state) => {

        return {

        }

    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }

)(ProductCreate)