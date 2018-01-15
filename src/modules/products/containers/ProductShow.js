import React from 'react'

import { push } from 'root/actions'
import { productShow, productUpdate, planSave, planUpdate, planDelete, chargeSave, chargeUpdate, chargeDelete } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { Button, Spin } from 'antd'
import ViewEdit from 'components/ViewEdit'
import ProductEditForm from '../components/ProductEditForm'
import { PlanList } from '../components/PlanList'

const productCodeSelector = state => state.ui.products.show.product
const entitiesProductsSelector = state => state.entities.products
const productSelector = createSelector(
    productCodeSelector,
    entitiesProductsSelector,
    (code, products) => products ? products[code] : null
)

export class ProductShow extends React.Component {

    componentDidMount() {
        this.props.actions.productShow({code : this.props.match.params.product})
    }

    componentWillUnmount() {
        //this.props.actions.uiClear()
    }

    render() {

        if(this.props.loading) {
            return <Spin />
        } else {
            return (
                <div className="container-fluid">
                    <div style={{display:'flex'}}>
                        <h1 style={{flex: '1 1 0'}}>
                            <i className="fa fa-tag"></i>
                            &nbsp;
                            <span>{this.props.product.name}</span>
                        </h1>
                    </div>
                    <ViewEdit
                        editing={this.props.editing}
                        viewer={() => (
                            <div>
                                <Button icon="edit" onClick={()=>this.handleEditProduct()}>Edit</Button>
                                <PlanList
                                    value={this.props.plans}
                                    onPlanSave={(plan) => this.handlePlanSave(plan)}
                                    onPlanUpdate={(plan) => this.handlePlanUpdate(plan)}
                                    onPlanDelete={(plan) => this.handlePlanDelete(plan)}
                                    onChargeSave={(charge) => this.handleChargeSave(charge)}
                                    onChargeUpdate={(charge) => this.handleChargeUpdate(charge)}
                                    onChargeDelete={(charge) => this.handleChargeDelete(charge)}
                                />
                            </div>
                        )}
                        editor={() => (
                            <ProductEditForm
                                form="product-edit-form"
                                initialValues={this.props.product}
                                onSubmit={(values) => this.handleUpdateProduct(values)} 
                                onCancel={() => this.handleCancel()}
                            />
                        )}
                    />
                </div>
            )
        }
    }

    handleEditProduct() {
        this.props.actions.push(`/products/${this.props.product.code}/edit`)
    }

    handleUpdateProduct(values) {
        this.props.actions.productUpdate(values)
    }

    handleCancel() {
        this.props.actions.push(`/products/${this.props.product.code}`)
    }

    handlePlanSave(plan) {
        this.props.actions.planSave(plan)
    }

    handlePlanUpdate(plan) {
        this.props.actions.planUpdate(plan)
    }

    handlePlanDelete(plan) {
        this.props.actions.planDelete(plan)
    }

    handleChargeSave(charge) {
        this.props.actions.chargeSave(charge)
    }

    handleChargeUpdate(charge) {
        this.props.actions.chargeUpdate(charge)
    }

    handleChargeDelete(charge) {
        this.props.actions.chargeDelete(charge)
    }

}

export default connect(
    
    (state) => {

        if(state.ui.products.show.loading) {
            return state.ui.products.show
        } else {
            return {
                ...state.ui.products.show,
                product: productSelector(state),
                editing: /\/products\/.*\/edit/.test(state.router.location.pathname),
                plans: [
                    {
                        code: 'plan.1',
                        name: 'plan.1',
                        charges: [
                            {
                                code: 'charge.1',
                                name: 'charge.1',
                                tiers: [
                                    { code: 'tier.1', from: 0, to: 10, amount: 10, perTier: false}
                                ]
                            }
                        ]
                    }
                ]
            }
        }
        
    },
    (dispatch) => {
        return {
            actions: bindActionCreators({
                push,
                productShow, productUpdate,
                planSave, planUpdate, planDelete,
                chargeSave, chargeUpdate, chargeDelete
            }, dispatch)
        }
    }

)(ProductShow)