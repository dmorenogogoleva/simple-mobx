import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from '../home'
import { OfficePage } from '../office'

import './app.css'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <div className="containe">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/office" component={OfficePage} exact />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </>)
}
