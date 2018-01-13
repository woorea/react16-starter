import React from 'react'

export class InputText extends React.Component {
    render() {
        const { id, label, input: { value, onChange } } = this.props
        return (
            <div className="form-group">
                <label htmlFor={id} >{label}</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={value} onChange={(e) => onChange(e)} />
                <small id={`${id}-help`} className="form-text text-muted"></small>
            </div>
        )
    }
}