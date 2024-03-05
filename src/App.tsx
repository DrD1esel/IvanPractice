import { Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import MainPage from './pages/MainPage/MainPage.tsx';
import PostsPage from './pages/PostsPage/PostsPage.tsx';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import Header from './components/Header/Header.tsx';

export const App = () => {
  const location = useLocation()
  
  return (
    <>
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/posts" Component={PostsPage} />
        <Route path="/posts/:postId" Component={SinglePostPage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </>
  );
}

export default App;