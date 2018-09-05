import React from 'react'

import withAuthorization from './withAuthorization'
import { db } from '../firebase/firebase'

class HomePage extends React.Component {
  state = {
    users: null
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot => this.setState({ users: snapshot.val() }))
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <h1>Home</h1>
        <p>the homepage is accessable for every signed in user</p>
        {!!users && <UserList users={users} />}
      </div>
    )
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of Usernames</h2>
    <p>saved in firebase db on signup</p>
    {Object.keys(users).map(key => (
      <div key={key}>{users[key].username}</div>
    ))}
  </div>
)

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(HomePage)
