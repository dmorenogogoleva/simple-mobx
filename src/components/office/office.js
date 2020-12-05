import React, { Component } from 'react'
import { observer } from '../mobx/react'
import { userStore } from '../store/user'

class Office extends Component {
  render() {
    return (<div>
      <h1>Hello, {userStore.user.name}!</h1>
    </div>)
  }
}

export const OfficePage = observer(Office)