export const getUserById = async (userId: string) => {
  const response = await fetch(`http://localhost:8000/users/${userId}`);
  const user = await response.json();
  return user;
}

export const getPosts = async (mode: number, postId: string='0') => {
  let response;
  switch (mode) {
    case 0:
      response = await fetch('http://localhost:8000/posts');
      break;
    case 1:
      response = await fetch(`http://localhost:8000/posts/${postId}`);
      break;
    case 2:
      response = await fetch('http://localhost:8000/posts?_sort=createdAt&_order=desc&_limit=3');
      break;
    default:
      response = await fetch('http://localhost:8000/posts');
  }

  const posts = await response.json();
  return posts;
}