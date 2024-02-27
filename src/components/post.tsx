import {FC, ReactElement} from "react";
import dayjs from 'dayjs'

type PostProps = {
    title: string,
    body: string,
    createdAt: number,
  }

const Post: FC<PostProps> = ({title, body, createdAt}): ReactElement => {
    const date = dayjs(createdAt).format('DD-MM-YYYY HH:mm:ss:SSS').toString();

    return (
        <div>
            title: {title};
            body: {body};
            createdAt: {date};
        </div>
    );
};

export default Post;
