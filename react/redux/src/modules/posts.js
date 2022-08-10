import axios from 'axios'

//GET_POSTS  요청보내니까 로딩이 걸리도록
//GET_POSTS _success: 요청 성공했으니 응답데이터 저장
//error : 요철 실패 에러 저장
const GET_POSTS = 'posts/GET_POSTS'
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'

//액션함수 (객체 생성이 아니라, 바로 Dispatch 하는 함수)
export const getPosts = () => async (dispatch, getState) => {
  dispatch({ type: GET_POSTS })
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    dispatch({ type: GET_POSTS_SUCCESS, payload: { posts: response.data } })
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e })
  }
}

//초기값
const initialState = {
  loading: false,
  data: null,
  error: null,
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case GET_POSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload.posts,
        error: null,
      }
    case GET_POSTS_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      return state
  }
}
