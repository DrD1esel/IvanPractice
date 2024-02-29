import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import MainPage from './pages/MainPage/MainPage.tsx';
import PostsPage from './pages/PostsPage/PostsPage.tsx';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage.tsx';

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/posts" Component={PostsPage} />
          <Route path="/posts/:postId" Component={SinglePostPage} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;