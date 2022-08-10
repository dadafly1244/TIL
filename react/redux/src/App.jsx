import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import store from './modules'
import PostsPage from './pages/posts'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">Posts</Link> |<Link to="/temp">Temp</Link>{' '}
        {/* 해당 링크와 페이지를 연결한 route 가 없으니 Not Found */}
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
