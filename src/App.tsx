import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import MainPage from './components/MainPage/MainPage.tsx';
import PostPage from './components/PostPage/PostPage.tsx';

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/posts" Component={PostPage} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;