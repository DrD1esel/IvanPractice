import { useEffect, useState } from "react";
import Post from "../../components/Post/Post.tsx";
import { PostObject } from "../../types/mainTypes.tsx";
import { getPosts } from "../../services/api.tsx";
import { PostsMode } from "../../enums/posts.tsx";

export const MainPage = () => {
  const [posts, setPosts] = useState<PostObject[]>([]);

  useEffect(() => {
    getPosts(PostsMode.Last3).then((value) => setPosts(value));
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