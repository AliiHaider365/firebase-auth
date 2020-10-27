import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const firebase = useFirebase();
  const history = useHistory();

  const onSubmitChange = async (e) => {
    e.preventDefault();
    seterror("")
    try {
      await firebase.auth().createUserWithEmailAndPassword(username, password);
      history.replace("/");
    } catch (error) {
      seterror(error)
      console.log(error)
    }
  };
  return (
    <div className="">
      <div>
        <div className="main" style={{ height: 460 }}>
          <p className="sign" align="center">
            Create An Account
          </p>
            {error &&<div className="error">please fill the fields correctly</div>}
          <form className="form1" onSubmit={onSubmitChange}>
            <input
              className="un "
              type="text"
              align="center"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(evt) => {
                setname(evt.target.value);
              }}
            />
            <input
              className="un "
              type="email"
              align="center"
              placeholder="Email"
              name="username"
              value={username}
              onChange={(evt) => {
                setusername(evt.target.value);
              }}
            />
            <input
              className="pass"
              type="password"
              align="center"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(evt) => {
                setpassword(evt.target.value);
              }}
            
            />
            <button className="submit" align="center">
              Sign in
            </button>
            <p className="forgot" align="center">
              <Link to="/login">All ready have a account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
