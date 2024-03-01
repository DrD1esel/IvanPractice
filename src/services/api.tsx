export const getUserById = async (userId: string) => {
  const response = await fetch(`http://localhost:8000/users/${userId}`);
  const user = await response.json();
  return user;
}

export const getPosts = async (id: string | null, sort: string | null, order: string | null, limit: number | null) => {
  let route = `http://localhost:8000/posts`;
  if (id) {
    route = route.concat('/', id);
  }
  if (sort) {
    route = route.concat('?_sort=', sort);
  }
  if (order) {
    route = route.concat('&_order=', order);
  }
  if (limit) {
    route.indexOf('?') === -1 ? route += '?' : route += '&';
    route = route.concat('_limit=', `${limit}`);
  }
 
  console.log(route);
  const response = await fetch(route);
  if (!response.ok) {
    throw new Error('Request failed');
  }

  const posts = await response.json();
  return posts;
}