import {FC, ReactElement} from "react";
import { Link } from "react-router-dom";
import dayjs from 'dayjs'
import "./Post.css";

type PostProps = {
  id: string,
  title: string,
  body: string,
  createdAt: number,
};

const Post: FC<PostProps> = ({id, title, body, createdAt}): ReactElement => {
  const date = dayjs(createdAt).format('DD-MM-YYYY HH:mm');
  const route = `http://localhost:5173/posts/${id}`;

  return (
    <div className="PostCard">
      <Link to={route}><h2>{title}</h2></Link>
      <p>{body}</p>
      <p>{date}</p>
    </div>
  );
}

export default Post;