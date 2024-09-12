import "../styles/navbar.css";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar({ title }) {
  return (
    <>
      <div id="nav">
        {/* first section */}
        <div id="logo">
          <img src={logo} height={80} width={80} alt="logo" />
          <h1>{title}</h1>
        </div>

        {/* second section */}
        <div id="menus">
          <NavLink exact to="/" activeClassName="active">
            <p>Home</p>
          </NavLink>
          <NavLink to="/documents" activeClassName="active">
            <p>Documents</p>
          </NavLink>
          <NavLink to="/settings" activeClassName="active">
            <p>Settings</p>
          </NavLink>
          <NavLink to="/profile" activeClassName="active">
            <p>Profile</p>
          </NavLink>
          <NavLink to="/downloads" activeClassName="active">
            <p>Downloads</p>
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            <p>Login</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
