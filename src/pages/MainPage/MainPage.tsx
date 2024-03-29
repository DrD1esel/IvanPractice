import { useEffect, useState } from "react";
import Post from "../../components/Post/Post.tsx";
import { PostObject } from "../../types/mainTypes.tsx";
import { getPosts } from "../../services/api.tsx";

export const MainPage = () => {
  const [posts, setPosts] = useState<PostObject[]>([]);

  useEffect(() => {
    getPosts({sort: 'createdAt', order: 'desc', limit: 3})
    .then((value) => setPosts(value))
    .catch((reject) => {
      console.log(reject);
    });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((value) => <li key={value.id}><Post id={value.id} title={value.title} body={value.body} createdAt={value.createdAt} /></li>)}
      </ul>
    </div>
  );
}

export default MainPage;