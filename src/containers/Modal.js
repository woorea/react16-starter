import React from 'react'
import { Button } from 'components/Button'

export default class Modal extends React.Component {

    handleCloseModal() {
        this.props.onEvent({type : 'UI/MODAL/CLOSE'})
    }

    handleSubmitModal() {
        this.props.onEvent({
            type : 'UI/MODAL/SUBMIT',
            payload: this.props.content
        })
    }

    render() {
        return (
            <div className="modal fade show" tabIndex="-1" role="dialog" style={{display: this.props.content ? 'block':'none'}}>
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.handleCloseModal()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <p>Are you sure</p>
                    </div>
                    <div className="modal-footer">
                    <Button type="button" icon="trash" label="Delete" color="danger" onClick={() => this.handleSubmitModal()}></Button>
                    </div>
                </div>
                </div>
            </div>  
        )
    }
}