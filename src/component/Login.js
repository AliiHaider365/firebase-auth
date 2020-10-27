import React,{useState} from "react";
import { Link, } from "react-router-dom";
import {useFirebase} from 'react-redux-firebase'
import {useHistory} from 'react-router-dom'

function Login() {
  const history = useHistory()
  const firebase =useFirebase();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("");


  const onSubmitChange = async (e)=>{

    e.preventDefault()
    const user = { email: username,
      password :password,} ;
    seterror("")
    try {
      await firebase.login(user)
      history.replace("/")
    } catch (error) {
      seterror(error)
      console.log(error)
    }
  }
  return (
    <div>
      <div className="main">
        <p className="sign" align="center">
          Log in
        </p>
        {error &&<div className="error">email or password is invalid</div>}

        <form className="form1" onSubmit={onSubmitChange}>
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(evt)=>{setusername(evt.target.value)}}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(evt)=>{setpassword(evt.target.value)}}

          />
          <button type="submit" className="submit" align="center">
            Sign in
          </button>
          <p className="forgot" align="center">
            <Link to="/register">Create a new Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
