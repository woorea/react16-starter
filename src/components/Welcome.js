import React from 'react'

import { Link } from 'react-router-dom'

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <Link to="/products">Products</Link>
            </div>
        )
    }
}