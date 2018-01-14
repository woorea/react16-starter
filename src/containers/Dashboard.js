import React from 'react'

import { uiSetSection } from 'root/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.actions.uiSetSection({section : 'dashboard'})
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default connect(
    
    (state) => {

        return {
        }

    },
    (dispatch) => {

        return {
            actions: bindActionCreators({
                uiSetSection
            }, dispatch)
        }
    }

)(Dashboard)