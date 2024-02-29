import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post.tsx";

const getPostById = async (postId: string) => {
  const response = await fetch(`http://localhost:8000/posts/${postId}`);
  const post = await response.json();
  return post;
}

export const SinglePostPage = () => {
  const { postId } = useParams();
  const [curentPost, setCurrentPost] = useState<PostObject>();

  useEffect(() => {
    if (postId !== undefined) {
      getPostById(postId).then((value) => setCurrentPost(value));
    }
  }, []);

  return (
    <div>
      {curentPost !== undefined && 
        <Post key={curentPost.id} id={curentPost.id} title={curentPost.title} body={curentPost.body} createdAt={curentPost.createdAt} />
      }
    </div>
  );
}

export default SinglePostPage;

type PostObject = {
  id: number,
  title: string,
  body: string,
  userId: string,
  createdAt: number,
};