import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Post from "../../components/Post/Post.tsx";
import { PostObject, UserObject } from "../../types/mainTypes.tsx";
import { getUserById, getPosts } from "../../services/api.tsx";

export const SinglePostPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState<PostObject>();
  const [currentUser, setCurrentUser] = useState<UserObject>();

  useEffect(() => {
    if (postId !== undefined) {
      getPosts({id: postId})
      .then((post) => {
        setCurrentPost(post);
        return getUserById(post.userId);
      })
      .catch(() => {
        navigate('/posts');
      })
      .then((user) => setCurrentUser(user))
    }
  }, [postId, navigate]);

  return (
    <div>
      {currentPost &&
        <Post id={currentPost.id} title={currentPost.title} body={currentPost.body} createdAt={currentPost.createdAt} />
      }
      {currentUser &&
        <p style={{textAlign: "end"}}><strong>{currentUser.name}</strong> {currentUser.email}</p>
      }
    </div>
  );
}

export default SinglePostPage;

