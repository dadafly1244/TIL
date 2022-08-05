import React from 'react'
import { Outlet } from 'react-router-dom'
function Posts() {
  return (
    <div>
      <p>Posts</p>
      <Outlet />
    </div>
  )
}

export default Posts
