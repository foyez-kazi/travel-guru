import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'

import { Login } from './components/Login'
import { Booking } from './components/Booking'
import { NotFound } from './components/NotFound'
import { Hotels } from './components/Hotels'
import { PrivateRoute } from './components/PrivateRoute'

export const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/booking/:id">
          <Booking />
        </Route>
        <PrivateRoute path="/hotels/:locationId">
          <Hotels />
        </PrivateRoute>
        {/* <Route path="/hotels/:locationId">
          <Hotels />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}
