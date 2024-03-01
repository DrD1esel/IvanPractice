import { apiUrl } from "../config";

export const getUserById = async (userId: string) => {
  const response = await fetch(`${apiUrl}/users/${userId}`);
  const user = await response.json();
  return user;
}

type GetPostArgs = {
  id?: string;
  sort?: string;
  order?: string;
  limit?: number;
}

export const getPosts = async ({ id, sort, order, limit}: GetPostArgs = {}) => {
  const params = new URLSearchParams();

  if (sort) {
    params.append('_sort', sort)
  }
  if (order) {
    params.append('_order', order)
  }
  if (limit) {
    params.append('_limit', limit.toString())
  }

  const response = await fetch(`${apiUrl}/posts${id ? '/' + id : ''}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
}