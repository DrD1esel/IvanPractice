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
        setCurrentPost(post);
        return getUserById(post.userId); 
      })
      .then((user) => setCurrentUser(user))
      .catch((reject) => {
        console.log(reject);
        navigate('/posts');
      });
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

