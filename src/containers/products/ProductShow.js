import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import * as actions from '../../actions'
import { Loading } from '../../components/Loading'
import { Button } from '../../components/Button'
import { Pagination } from '../../components/Pagination';

export class ProductShow extends React.Component {

    componentDidMount() {
        this.props.actions.productShow('product.1')
    }

    componentWillUnmount() {
        this.props.actions.uiClear()
    }

    handleEditProduct() {
        this.props.actions.push(`/products/${this.props.product.code}/edit`)
    }

    render() {
        return (
            <div className="container-fluid">
                <div style={{display:'flex'}}>
                    <h1 style={{flex: '1 1 0'}}>
                        <i className="fa fa-tag"></i>
                        &nbsp;
                        <span>Show Product</span>
                    </h1>
                </div>
                <Button icon="pencil" label="Edit" onClick={()=>this.handleEditProduct()} />
                <Link to="/products">Products</Link>
            </div>
        )
    }

}

export default connect(
    
    (state) => {

        if(state.ui) {
        
            return {
                loading: state.ui.loading,
                product: state.entities.products[state.ui.item]
            }
       
        } else {

            return {
                loading: false,
                product: null,
                modal: null
            }

        }

    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }

)(ProductShow)