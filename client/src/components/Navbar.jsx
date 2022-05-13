import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Short Links</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/links" className="nav-link">
                  Links
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={logoutHandler}
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
