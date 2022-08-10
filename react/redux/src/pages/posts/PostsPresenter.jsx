import React from 'react'

function PostsPresenter({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  )
}

export default PostsPresenter
