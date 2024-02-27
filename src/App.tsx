import { useEffect, useState } from "react";
import Post from "./components/post/post.tsx";
import "./App.css"

const getUsers = async () => {
  const response = await fetch('http://localhost:8000/users');
  const users = await response.json();
  console.log(users);
}

const getPosts = async () => {
  const response = await fetch('http://localhost:8000/posts');
  const posts = await response.json();
  return posts;
}

const get3LastPosts = async () => {
  const response = await fetch('http://localhost:8000/posts?_sort=createdAt&_order=desc&_limit=3');
  const posts = await response.json();
  const arr: Array<PostObject> = Array.from(posts);
  return arr;
}

export const App = () => {
  const [posts, setPosts] = useState<PostObject[]>([]);

  useEffect(() => {
    get3LastPosts().then((value) => setPosts(value));
  }, [])

  
  return(
    <div>
      <header>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
          width='48'
          height='40'
        />
        <h1 style={{marginLeft: "20px"}}>IvanPractice</h1>
      </header>
      <ul>
        {posts.map((value) => <li><Post key={value.id} title={value.title} body={value.body} createdAt={value.createdAt} /></li>)}
      </ul>
    </div>
  );
}

export default App

type PostObject = {
  id: number,
  title: string,
  body: string,
  userId: string,
  createdAt: number,
};