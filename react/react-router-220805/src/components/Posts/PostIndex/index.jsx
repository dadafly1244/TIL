import React, { useEffect, useState } from 'react'
import { postData } from '../../../constants/postData'
import { NavLink, useSearchParams, useLocation } from 'react-router-dom'

function PostIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState(postData)
  const location = useLocation()
  console.log(location)

  const searchInputHandler = (e) => {
    const filter = e.target.value
    filter ? setSearchParams({ filter }) : setSearchParams({})
  }
  useEffect(() => {
    setPosts(
      postData.filter((post) => {
        const filter = searchParams.get('filter')
        const title = post.title.toLowerCase() //다 소문자로  바꿔서 잘못판단하지 않도록 해준다!!
        return filter ? title.includes(filter) : true //포함되어있으면 보여주고 아니면 안보여주고! or 검색어가 없으면 다 보여줘!
      }),
    )
    console.log(location.search)
  }, [searchParams])

  return (
    <div>
      PostIndex
      <input type="text" onChange={searchInputHandler} />
      {posts.map((post) => (
        <div key={post.id}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            to={`/posts/${post.id}`}
            state={{ post: posts.find((data) => data.id === post.id) }}
          >
            <p>{post.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default PostIndex
