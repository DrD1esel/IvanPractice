import {FC, ReactElement} from "react";
import dayjs from 'dayjs'
import "./Post.css";

type PostProps = {
  title: string,
  body: string,
  createdAt: number,
};

const Post: FC<PostProps> = ({title, body, createdAt}): ReactElement => {
  const date = dayjs(createdAt).format('DD-MM-YYYY HH:mm');

  return (
    <div className="PostCard">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{date}</p>
    </div>
  );
}

export default Post;