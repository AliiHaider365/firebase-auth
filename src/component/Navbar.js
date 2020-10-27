import React from "react";
import { useFirebase } from "react-redux-firebase";

function Navbar() {
  const firebase = useFirebase()
  return (
    <nav className="nav navbar navbar-dark justify-content-between "
    style={{background: "linear-gradient(to right, #e06c6c, #b98ec1 )"}}
    >
      <a className="navbar-brand " href="/">
        <img
          src="https://img.icons8.com/nolan/2x/customer-insight.png"
          width="35"
          height="35"
          className="d-inline-block align-top"
          alt="icon"
        />
      {"  "}
        Bootstrap
      </a>
      <a 
      style={{cursor:'pointer'}}
      onClick={()=>{firebase.logout()}}
      className="logout">Log out 
      <img
          src="https://img.icons8.com/nolan/2x/logout-rounded-down.png"
          width="35"
          height="35"
          className="d-inline-block align-top"
          alt="logout"
        />
      </a>
    </nav>
  );
}

export default Navbar;
