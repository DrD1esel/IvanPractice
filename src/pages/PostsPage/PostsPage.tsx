import { useEffect, useState } from "react";
import Post from "../../components/Post/Post.tsx";
import { PostObject } from "../../types/mainTypes.tsx";
import { getPosts } from "../../services/api.tsx";

export const PostsPage = () => {
  const [posts, setPosts] = useState<PostObject[]>();

  useEffect(() => {
    getPosts(null, null, null, null)
    .then((value) => setPosts(value))
    .catch((reject) => {
      console.log(reject);
    });
  }, []);

  return (
    <div>
      {posts && 
      <ul>
        {posts.map((value) => <li key={value.id}><Post id={value.id} title={value.title} body={value.body} createdAt={value.createdAt} /></li>)}
      </ul>
      }
    </div>
  );
}

export default PostsPage;