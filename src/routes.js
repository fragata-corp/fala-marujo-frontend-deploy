import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import PostForm from "./pages/PostForm";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dash" component={Dashboard} />

        <PrivateRoute exact path="/user" component={UserList} />
        <PrivateRoute exact path="/user/:id" component={Profile} />

        <PrivateRoute exact path="/user/create" component={UserForm} />
        <PrivateRoute exact path="/users/edit/:id" component={UserForm} />

        <PrivateRoute exact path="/posts/list" component={PostList} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/create/post" component={PostForm} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
