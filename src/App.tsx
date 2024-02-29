import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import MainPage from './components/MainPage/MainPage.tsx';
import PostsPage from './components/PostsPage/PostsPage.tsx';
import SinglePostPage from './components/SinglePostPage/SinglePostPage.tsx';

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