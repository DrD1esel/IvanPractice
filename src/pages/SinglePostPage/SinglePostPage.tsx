import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post.tsx";
import { PostObject } from "../../types/mainTypes.tsx";
import { UserObject } from "../../types/mainTypes.tsx";

const getPostById = async (postId: string) => {
  const response = await fetch(`http://localhost:8000/posts/${postId}`);
  const post = await response.json();
  return post;
}

const getUserById = async (userId: string) => {
  const response = await fetch(`http://localhost:8000/users/${userId}`);
  const user = await response.json();
  return user;
}

export const SinglePostPage = () => {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState<PostObject>();
  const [currentUser, setCurrentUser] = useState<UserObject>();

  useEffect(() => {
    if (postId !== undefined) {
      getPostById(postId)
      .then((post) => {
        setCurrentPost(post)
        return getUserById(post.userId)
      })
      .then((user) => setCurrentUser(user))
    }
  }, []);

  return (
    <div>
      {currentPost !== undefined &&
        <Post id={currentPost.id} title={currentPost.title} body={currentPost.body} createdAt={currentPost.createdAt} />
      }
      {currentUser !== undefined && 
        <p style={{textAlign: "end"}}><strong>{currentUser.name}</strong> {currentUser.email}</p>
      }
    </div>
  );
}

export default SinglePostPage;

