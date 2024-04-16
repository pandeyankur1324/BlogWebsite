import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <span id="logo">Blog</span>
        <ul className="Navbar">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Sign In</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
