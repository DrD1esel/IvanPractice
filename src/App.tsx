import { Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import MainPage from './pages/MainPage/MainPage.tsx';
import PostsPage from './pages/PostsPage/PostsPage.tsx';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';

export const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className='appHeader'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
          width='48'
          height='40'
        />
        <h1 onClick={() => navigate('/')}>IvanPractice</h1>
      </header>
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