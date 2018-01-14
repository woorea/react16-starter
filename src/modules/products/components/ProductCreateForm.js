import React from 'react'

import { Field, reduxForm } from 'redux-form'

import { Form, Button } from 'antd'

import InputText from 'components/InputText'
import TextArea from 'components/TextArea'
import DatePicker from 'components/DatePicker'

export default reduxForm({})(({onCancel: handleCancel, handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field id="product-code" label="Code" name="code" component={InputText} />
            <Field id="product-name" label="Name" name="name" component={InputText} />
            <Field id="product-description" label="Description" name="description" component={TextArea} />
            <Field id="product-start" label="Start Date" name="start" component={DatePicker} />
            <Field id="product-end" label="Start End" name="end" component={DatePicker} />
            <Form.Item>
                <Button onClick={handleCancel}>Cancel</Button>
                &nbsp;
                <Button icon="save" onClick={handleSubmit} htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    )
})