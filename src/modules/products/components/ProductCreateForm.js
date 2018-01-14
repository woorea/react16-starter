import React from 'react'

import { Field, reduxForm } from 'redux-form'

import { Button } from 'components/Button'
import { InputText } from 'components/InputText'
import { TextArea } from 'components/TextArea'

export default reduxForm({})(({onCancel: handleCancel, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field id="product-name" label="Name" name="name" component={InputText} />
            <Field id="product-description" label="Description" name="description" component={TextArea} />
            <Field id="product-code" label="Code" name="code" component={InputText} />
            <Field id="product-start" label="Start Date" name="start" component={InputText} />
            <Field id="product-end" label="Start End" name="start" component={InputText} />
            <Button type="button" label="Cancel" onClick={handleCancel} />
            &nbsp;
            <Button type="submit" icon="save" label="Save" />
        </form>
    )
})