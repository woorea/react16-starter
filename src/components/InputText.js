import React from 'react'

import { Form , Input } from 'antd'

export default (props) => {
    const { id, label, input: { value, onChange } } = props
    return (
        <Form.Item id={id} label={label}>
            <Input value={value} onChange={(e) => onChange(e)} />
        </Form.Item>
    )
}