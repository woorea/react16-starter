import React from 'react'

import { Form , DatePicker } from 'antd'

export default (props) => {
    const { id, label, input: { value, onChange } } = props
    return (
        <Form.Item id={id} label={label}>
            <DatePicker defaultValue={null} onChange={(e) => onChange(e)} />
        </Form.Item>
    )
}