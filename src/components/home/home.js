import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (<div>
    <h1>Enter page</h1>
    <p>Please, enter your name and password</p>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" />

    <Link to="/office">Enter</Link>
  </div>)
}
