import React, { Component } from 'react'
import { observer } from '../mobx/react'
import { Link } from 'react-router-dom'
import { userStore } from '../store/user'

class Home extends Component {
  onChangeName = (e) => userStore.setName(e.target.value)

  render() {
    return (<div>
      <h1>Enter page</h1>
      <p>Please, enter your name and password</p>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={userStore.user.name}
        onChange={this.onChangeName}
      />

      <Link to="/office">Enter</Link>
    </div >)
  }
}

export const HomePage = observer(Home)