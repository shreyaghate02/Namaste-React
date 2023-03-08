const Title = () => (
    <a href="/">
    <img 
      className='logo'
      alt="logo"
      src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg" />
    </a>
);

const Header = () => {
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
    </div>
  )
};

export default Header;