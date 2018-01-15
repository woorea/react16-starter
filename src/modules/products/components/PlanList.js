import React from 'react'

import { Form, Button } from 'antd'

export class Tier extends React.Component {

    render() {
        
        return (
            <React.Fragment> 
                {JSON.stringify(this.props.value, null, 2)}
            </React.Fragment>
        )
    }

}

export class TierEdit extends React.Component {

    render() {
        
        return (
            <React.Fragment> 
                <Button type="danger" onClick={() => this.props.onRemove()}>remove tier</Button>
            </React.Fragment>
        )
    }

}

export class TierList extends React.Component {

    render() {
        
        return (
            <React.Fragment> 
                {
                    this.props.value.map(tier => {
                        return (
                            <Tier value={tier} key={tier.code}/>
                        )
                    })
                }
            </React.Fragment>
        )
    }

}

export class TierListEdit extends React.Component {

    render() {
        
        return (
            <React.Fragment> 
                {
                    this.props.value.map(tier => {
                        return (
                            <TierEdit
                                value={tier}
                                onChange={(value) => this.handleChange(value)}
                                onRemove={() => this.handleRemove(tier)}
                                key={tier.code}
                            />
                        )
                    })
                }
                <Button type="primary" onClick={() => this.handleAdd()}>add to tiers</Button>
            </React.Fragment>
        )
    
    }

    handleChange(value) {
        console.log('tier change')
        this.props.onChange(this.props.value.map(tier => {
            if(tier.code === value.code) {
                return value
            } else {
                tier
            }
        }))
    }

    handleAdd(tier) {
        console.log('tier add')
        this.props.onChange([
            ...this.props.value,
            {from : 0, to: 0, amount: 10, perTier: false}
        ])
    }

    handleRemove(tier) {
        console.log('tier remove')
        this.props.onChange(this.props.value.filter(tier => {
            return tier.code != value.code
        }))
    }

}

export class Charge extends React.Component {

    render() {

        const charge = this.props.value
        
        return (
            <React.Fragment>
                <div>
                    <div>{charge.name} ({charge.code})</div>
                    <div>
                        <Button type="default" onClick={() => this.props.onEdit()}>edit charge</Button>
                        <Button type="danger" onClick={() => this.props.onDelete()}>remove charge</Button>
                    </div>
                </div>
                <TierList value={this.props.value.tiers} />
            </React.Fragment>
        )
    }

}

export class ChargeCreate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tiers: []
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <Form onSubmit={() => this.props.onChargeSave()}>
                    <TierListEdit
                        value={this.props.value.tiers}
                        onChange={(value) => this.handleTiersChange(value)}
                    />
                    <Button type="primary" htmlType="submit"></Button>
                </Form>
            </React.Fragment>
        )
    }

    handleTiersChange(value) {
        this.setState({
            ...this.state,
            tiers: value
        })
    }

}

export class ChargeEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tiers: []
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <Form onSubmit={() => this.props.onChargeUpdate()}>
                    <TierListEdit
                        value={this.props.value.tiers}
                        onChange={(value) => this.handleTiersChange(value)}
                    />
                    <Button type="primary" htmlType="submit"></Button>
                </Form>
            </React.Fragment>
        )
    }

    handleTiersChange(value) {
        this.setState({
            ...this.state,
            tiers: value
        })
    }

}

export class ChargeList extends React.Component {

    render() {
        
        return (
            <React.Fragment> 
                {
                    this.props.value.map(charge => {
                        return (
                            <div className="charge" key={charge.code}>
                                <Charge
                                    value={charge}
                                    onEdit={() => this.props.onEdit(charge)}
                                    onDelete={() => this.props.onDelete(charge)}
                                />
                            </div>
                        )
                    })
                }
                <Button type="primary" onClick={() => this.props.onCreate()}>create charge</Button>
            </React.Fragment>
        )
    }

}

export class Plan extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mode: 'view'
        }
    }

    render() {

        const plan = this.props.value

        switch(this.state.mode) {
            case 'form': {
                switch(this.state.type) {
                    case 'clone':
                    case 'edit':
                        return (
                            <PlanEdit value={this.state.values} />
                        )
                    case 'chargeCreate':
                        return (
                            <ChargeCreate value={this.state.values} />
                        )
                    case 'chargeEdit':
                        return (
                            <ChargeEdit value={this.state.values} />
                        )
                }
            }
            default: 
                return (
                    <React.Fragment>
                        <div>
                            <div>{plan.name} ({plan.code})</div>
                            <div>
                                <Button type="default" onClick={() => this.handleClone()}>clone plan</Button>
                                <Button type="default" onClick={() => this.handleEdit()}>edit plan</Button>
                                <Button type="danger" onClick={() => this.props.onDelete()}>remove plan</Button>
                            </div>
                        </div>
                        <ChargeList
                            value={plan.charges}
                            onCreate={() => this.handleChargeCreate()}
                            onEdit={(charge) => this.handleChargeEdit(charge)}
                            onDelete={(charge) => this.props.onChargeDelete(charge)}
                        />
                    </React.Fragment>
                )
        }
    }

    handleClone() {
        console.log('clone')
        this.setState({
            mode: 'form',
            type: 'clone',
            values: {
                ...this.props.value
            }
        })
    }

    handleEdit() {
        console.log('edit')
        this.setState({
            mode: 'form',
            type: 'edit',
            values: {
                ...this.props.value
            }
        })
    }

    handleChargeCreate(charge) {
        console.log('create charge')
        this.setState({
            mode: 'form',
            type: 'chargeCreate',
            values: {
                tiers: []
            }
        })
    }

    handleChargeEdit(charge) {
        console.log('edit charge')
        this.setState({
            mode: 'form',
            type: 'chargeEdit',
            values: {
                ...charge
            }
        })
    }

}

export class PlanCreate extends React.Component {

    render() {
        
        return (
            <React.Fragment>
                <Form onSubmit={() => this.props.onSave()}>
                    <Button type="primary" htmlType="submit"></Button>
                </Form>
            </React.Fragment>
        )
    }

}

export class PlanEdit extends React.Component {

    render() {
        
        return (
            <React.Fragment>
                <Form onSubmit={() => this.props.onUpdate()}>
                    <Button type="primary" htmlType="submit"></Button>
                </Form>
            </React.Fragment>
        )
    }

}

export class PlanList extends React.Component {

    render() {
        
        return (
            <div className="plans"> 
                {
                    this.props.value.map(plan => {
                        return (
                            <div className="plan" key={plan.code}>
                                <Plan 
                                    value={plan}
                                    onUpdate={(value) => this.props.onPlanUpdate(value)}
                                    onDelete={(value) => this.props.onPlanDelete(value)}
                                    onClone={(value) => this.props.onPlanClone(value)}
                                    onChargeCreate={(value) => this.props.onChargeCreate(value)}
                                    onChargeUpdate={(value) => this.props.onChargeUpdate(value)}
                                    onChargeDelete={(value) => this.props.onChargeDelete(value)}
                                />
                            </div>
                        )
                    })
                }
                <Button type="primary" onClick={() => this.handleCreate()}>create plan</Button>
            </div>
        )
    }

    handleCreate() {
        console.log('plan create')
    }

}