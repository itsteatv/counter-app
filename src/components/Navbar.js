import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <a href="counter" className="title">
        Counter App
      </a>
      <ul>
        <ActiveNavbar href="/about">About</ActiveNavbar>
        <ActiveNavbar href="/contact">Contact</ActiveNavbar>
      </ul>
    </nav>
  );
}

function ActiveNavbar({children, href, ...props }) {
  console.log({href});
  const pathName = window.location.pathname;
  return (
    <li className={pathName === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}

export default Navbar;
