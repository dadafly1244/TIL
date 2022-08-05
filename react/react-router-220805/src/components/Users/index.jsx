import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { userData } from '../../constants/userData'

function Users() {
  const location = useLocation()
  return (
    <div>
      <p>User</p>

      {location.state && location.state.data}

      <Outlet />
    </div>
  )
}

export default Users
