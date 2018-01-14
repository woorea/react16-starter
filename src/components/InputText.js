import React from 'react'

import { Form , Input } from 'antd'

export default (props) => {
    const { id, label, input: { value, onChange }, disabled = false } = props
    return (
        <Form.Item id={id} label={label}>
            <Input value={value} onChange={(e) => onChange(e)} disabled={disabled} />
        </Form.Item>
    )
}