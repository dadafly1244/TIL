import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

import { userData } from '../../../constants/userData'

function UserIndex() {
  return (
    <div>
      UserIndex
      {userData.map((user) => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </div>
  )
}

export default UserIndex
