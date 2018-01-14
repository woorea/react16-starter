import React from 'react'

import { Form , DatePicker } from 'antd'

export default (props) => {
    const { id, label, input: { value, onChange } } = props
    return (
        <Form.Item id={id} label={label}>
            <DatePicker value={value} onChange={(e) => onChange(e)} />
        </Form.Item>
    )
}