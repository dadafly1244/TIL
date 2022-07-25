import { Routes, Route } from 'react-router-dom'

import AllMeetupPage from './pages/AllMeetup';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './component/layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes> 
    </Layout>
  );
}

export default App;
