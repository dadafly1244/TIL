import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/posts">Posts</Link> | <Link to="/users">Users</Link> |{' '}
      <Link to="/albums">Albums</Link>
    </nav>
  )
}

export default Nav
