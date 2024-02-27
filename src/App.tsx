import { useEffect, useState } from "react";
import Post from "./components/post";
import Header from "./components/header";

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
  const posts = await getPosts();
  const arr: Array<any> = Array.from(posts);
  arr.sort((a, b) => a.createdAt - b.createdAt);
  return arr.slice(arr.length - 3);
}

export const App = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    get3LastPosts().then((value) => setPosts(value));
  }, [])

  
  return(
    <div>
      <Header />
      {posts.map((value) => <Post key={value.id} title={value.title} body={value.body} createdAt={value.createdAt} />)}
    </div>
  );
}

export default App
