import { useEffect, useState } from "react";
import Post from "../../components/a/Post.tsx";

const getAllPosts = async () => {
  const response = await fetch('http://localhost:8000/posts');
  const posts = await response.json();
  return posts;
}

export const PostPage = () => {
  const [posts, setPosts] = useState<PostObject[]>();

  useEffect(() => {
    getAllPosts().then((value) => setPosts(value));
  }, []);

  return (
    <div>
      {posts !== undefined && 
      <ul>
        {posts.map((value) => <li><Post key={value.id} id={value.id} title={value.title} body={value.body} createdAt={value.createdAt} /></li>)}
      </ul>
      }
    </div>
  );
}

export default PostPage;

type PostObject = {
  id: string,
  title: string,
  body: string,
  userId: string,
  createdAt: number,
};