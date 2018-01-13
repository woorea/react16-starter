import React from 'react'

export class Button extends React.Component {
    render() {
        return (
            <button type={this.props.type ? this.props.type : 'button'} className={`btn btn-outline-${this.props.color || 'primary'}`} onClick={() => this.props.onClick ? this.props.onClick() : null}>
                <span className={`fa fa-${this.props.icon}`}></span>
                &nbsp;
                <span>{this.props.label}</span>
            </button>
        )
    }
}