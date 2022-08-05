import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

function PostDetail() {
  const location = useLocation()
  const navigate = useNavigate() // {/*Link와 유사하지만, navigate는 함수 안에서 사용할 수 있음!*/}
  const { post } = location.state ? location.state : { path: '' } //잘못된 주소로 접근했을때!! 예외처리!

  if (!post) return <p>Not Found</p>

  return (
    <div>
      {post.title}
      {post.body}
      <button onClick={() => navigate('/users', { state: { data: 1 } })}>
        유저로가기
      </button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default PostDetail
