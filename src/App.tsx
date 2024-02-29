import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import MainPage from './pages/MainPage/MainPage.tsx';
import PostsPage from './pages/PostsPage/PostsPage.tsx';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage.tsx';

export const App = () => {
  return (
    <BrowserRouter>
      <header className='appHeader'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
          width='48'
          height='40'
        />
        <h1 style={{marginLeft: "20px"}}>IvanPractice</h1>
      </header>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/posts" Component={PostsPage} />
          <Route path="/posts/:postId" Component={SinglePostPage} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;