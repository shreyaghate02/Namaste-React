import { useState } from "react";
import Logo from "../assets/img/foodvillalogo.jpeg";
import { Link, useNavigate } from 'react-router-dom';

const Title = () => (
    <a href="/">
    <img 
      className='logo'
      alt="logo"
      src={Logo} />
    </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //to create state variables
  const navigate = useNavigate();

  const toggleLogin = () => {
    console.log("isLoggedIn", isLoggedIn);
    setIsLoggedIn(!isLoggedIn);
    navigate('/login');

    // if(!user.authenticated ) {
    //   setIsLoggedIn(!isLoggedIn);
    //   navigate('/login', { state: { authenticated: false } });
    // } else {
    //   setIsLoggedIn(!isLoggedIn);
    //     navigate('/login', { state: { authenticated: false, msg: "You have logged out of Insta Food App. " } });
    // }
  }

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
          <button className="nav-btn" onClick={() => {toggleLogin()}} > {isLoggedIn?  "Logout" : "Login" } </button>

      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  )
};

export default Header;