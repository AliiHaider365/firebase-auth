import React from "react";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux';
import {isEmpty,isLoaded} from 'react-redux-firebase'
import Loader from "react-loader-spinner";


const ProtectedRoute = ({component:Component, ...rest}) => {

  const auth = useSelector(state => state.firebase.auth)

  if(!isLoaded(auth)){
    return <div className="loading"> <Loader
    type="Rings"
     color="#8c55aa"
     height={400}
     width={400}
     timeout={3000} //3 secs
     />
     </div>
  }
    return !isEmpty(auth) ? (
      <Route {...rest} render={(props) => <Component {...rest} {...props}/> } />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
}

export default ProtectedRoute;
