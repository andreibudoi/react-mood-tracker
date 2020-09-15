import React, { useState } from "react";
import "./App.css";
import AddMood from "./components/AddMood/AddMood";
import MoodJournal from "./components/MoodJournal/MoodJournal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Auth from "./components/Auth/Auth";

const initialState = {
    name: "",
    email: "",
    entries: [],
};

const App = () => {
    const [userData, setUserData] = useState(initialState);
    const [isAuth, setAuth] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/auth">
                    <Auth setUserData={setUserData} setAuth={setAuth} />
                </Route>
                <PrivateRoute path="/new" isAuth={isAuth}>
                    <AddMood userData={userData} setUserData={setUserData} />
                </PrivateRoute>
                <PrivateRoute exact={true} path="/" isAuth={isAuth}>
                    <MoodJournal userData={userData} />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default App;
