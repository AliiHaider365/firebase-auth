import React from "react";
import "./styles/App.css";
import Login from "./component/Login";
import Home from "./component/Home";
import Register from "./component/Register";
import {Provider} from 'react-redux'
import store,{rrfProps} from "./styles/store";
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./component/Protected-route";
import Error404 from './component/Error404'


function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
     <BrowserRouter>
      <Switch>
      <ProtectedRoute exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route component={Error404}/>
      </Switch>
      </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
    </div>
  );
}

export default App;
