import { useEffect } from "react";

const getUsers = async () => {
  const response = await fetch('http://localhost:8000/users');
  const users = await response.json();
  console.log(users);
}

export const App = () => {
  useEffect(() => {
    getUsers();
  }, [])
  return <p>Hello</p>
}

export default App
