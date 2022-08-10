import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../modules/posts'
import PostsPresenter from './PostsPresenter'

function PostsContainer() {
  const { data, loading, error } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  // data 가 없을 때만 요청을 보냄!
  useEffect(() => {
    !data && dispatch(getPosts())
  }, [data, dispatch])

  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생!</div>
  if (!data) return null
  return <PostsPresenter posts={data} />
}

export default PostsContainer
