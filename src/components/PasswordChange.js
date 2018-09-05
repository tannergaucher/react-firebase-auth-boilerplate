import React, { Component } from 'react'

import { auth } from '../firebase'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class PasswordChangeForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  onSubmit = e => {
    const { passwordOne } = this.state

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
      })
      .catch(error => {
        this.setState({ error })
      })

    e.preventDefault()
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state

    const isInvalid = passwordOne !== passwordTwo || passwordOne === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          onChange={this.onChange}
          name="password"
          type="password"
          placeholder="New Password"
        />
        <input
          value={passwordTwo}
          onChange={this.onChange}
          name="password"
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default PasswordChangeForm
