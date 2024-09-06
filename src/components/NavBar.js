import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
