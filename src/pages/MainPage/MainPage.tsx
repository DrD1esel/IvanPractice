import { useEffect, useState } from "react";
import Post from "../../components/Post/Post.tsx";
import "./MainPage.css";

const get3LastPosts = async () => {
  const response = await fetch('http://localhost:8000/posts?_sort=createdAt&_order=desc&_limit=3');
  const posts = await response.json();
  const arr: Array<PostObject> = Array.from(posts);
  return arr;
}

export const MainPage = () => {
  const [posts, setPosts] = useState<PostObject[]>([]);

  useEffect(() => {
    get3LastPosts().then((value) => setPosts(value));
  }, []);
  
  return (
    <div>
      <ul>
        {posts.map((value) => <li><Post key={value.id} id={value.id} title={value.title} body={value.body} createdAt={value.createdAt} /></li>)}
      </ul>
    </div>
  );
}

export default MainPage;

type PostObject = {
  id: string,
  title: string,
  body: string,
  userId: string,
  createdAt: number,
};