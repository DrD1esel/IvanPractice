import { useNavigate } from "react-router-dom";
import './Header.css'

export const Header = () => {
  const navigate = useNavigate()

  return (
  <header className='appHeader'>
    <img
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
      width='48'
      height='40' 
    />
    <h1 onClick={() => navigate('/')}>IvanPractice</h1>
  </header>);
}

export default Header;