import React from 'react'
import { Route, Switch } from 'react-router'

import { ProductList, ProductCreate, ProductShow } from './containers'

export default (
    <Switch>
        <Route exact path="/products" component={ ProductList } />
        <Route exact path="/products/create" component={ ProductCreate } />
        <Route path="/products/:product" component={ ProductShow } />
    </Switch>
)