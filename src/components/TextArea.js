import React from 'react'

export class TextArea extends React.Component {
    render() {
        const { id, label, input: { value, onChange } } = this.props
        return (
            <div className="form-group">
                <label htmlFor={id} >{label}</label>
                <textarea className="form-control" id="exampleInputEmail1" aria-describedby={`${id}-help`} placeholder="" value={value} onChange={(e) => onChange(e)}></textarea>
                <small id={`${id}-help`} className="form-text text-muted"></small>
            </div>
        )
    }
}