export type PostObject = {
  id: string,
  title: string,
  body: string,
  userId: string,
  createdAt: number,
};

export type UserObject = {
  id: string,
  name: string,
  email: string,
  avatarUrl: string,
};

export type AuthObject = {
  userId: string,
  password: string,
  email: string,
};