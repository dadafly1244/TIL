import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Posts from './components/Posts'
import PostDetail from './components/Posts/PostDetail'
import PostIndex from './components/Posts/PostIndex'
import Users from './components/Users'
import Albums from './components/Albums'
import AlbumList from './components/Albums/AlbumList'
import Photos from './components/Albums/Photos'
import PhotoList from './components/Albums/Photos/PhotoList'
import PhotoDetail from './components/Albums/Photos/PhotoDetail'

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="albums" element={<Albums />}>
          <Route index element={<AlbumList />} />
          <Route path=":albumId" element={<Photos />}>
            <Route index element={<PhotoList />} />
            <Route path="photos/:photoId" element={<PhotoDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
