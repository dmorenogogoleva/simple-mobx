import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '../home'
import { Office } from '../office'

import './app.css'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <div className="containe">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/office" component={Office} exact />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </>)
}
