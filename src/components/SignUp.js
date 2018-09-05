import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../firebase'

import * as routes from '../constants/routes'

const SignUpPage = ({ history }) => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class SignUpForm extends React.Component {
  state = { ...INITIAL_STATE }

  onSubmit = e => {
    e.preventDefault()
    const { username, email, passwordOne } = this.state
    const { history } = this.props
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        history.push(routes.HOME)
      })
      .catch(error => {
        this.setState({ error: 'error' })
      })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      passwordTwo === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={this.onChange}
          name="username"
          placeholder="Full Name"
          type="text"
        />
        <input
          value={email}
          onChange={this.onChange}
          name="email"
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={this.onChange}
          name="passwordOne"
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={this.onChange}
          name="passwordTwo"
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign up</Link>
  </p>
)

export default withRouter(SignUpPage)

export { SignUpForm, SignUpLink }
