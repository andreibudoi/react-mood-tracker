import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, isAuth, ...rest }) => {
    return (
        <Route {...rest}>{isAuth ? children : <Redirect to="/auth" />}</Route>
    );
};

export default PrivateRoute;
