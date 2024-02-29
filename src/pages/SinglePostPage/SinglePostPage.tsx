import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Post from "../../components/Post/Post.tsx";
import { PostObject, UserObject } from "../../types/mainTypes.tsx";
import { getUserById, getPosts } from "../../services/api.tsx";
import { PostsMode } from "../../enums/posts.tsx";

export const SinglePostPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState<PostObject>();
  const [currentUser, setCurrentUser] = useState<UserObject>();

  useEffect(() => {
    if (postId !== undefined) {
      getPosts(PostsMode.ById, postId)
      .then((post) => {
        if (Object.keys(post).length !== 0) {
          setCurrentPost(post)
          return getUserById(post.userId)
        } else {
          navigate('/posts');
        }
      })
      .then((user) => setCurrentUser(user))
    }
  }, []);

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

