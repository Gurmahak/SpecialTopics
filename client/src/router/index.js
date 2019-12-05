import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App'
import CharacterContainer from '../components/containers/CharacterContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/character/:id' component={CharacterContainer} />
    </Switch>
  </BrowserRouter>
)

export default Router