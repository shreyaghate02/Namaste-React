import { useState } from "react";

// const authenticateUser = () => {
//   //API call to check authentication 
//   return true;
// }

const Title = () => (
    <a href="/">
    <img 
      className='logo'
      alt="logo"
      src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg" />
    </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //to create state variables
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  )
};

export default Header;