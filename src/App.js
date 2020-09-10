import React, { useState } from "react";
import "./App.css";
import AddMood from "./components/AddMood/AddMood";
import MoodJournal from "./components/MoodJournal/MoodJournal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const initialState = {
    name: "Andrei",
    entries: [
        {
            dateTime: new Date(),
            title: "What a good day! :)",
            description: "I had an amazing evening",
            mood: "great",
        },
        {
            dateTime: new Date(),
            title: "What a good day! :) :) :) :) :) :) :) :) :) :) :) :) :) :)",
            description: "",
            mood: "good",
        },
        {
            dateTime: new Date(),
            title: "",
            description: "",
            mood: "ok",
        },
        {
            dateTime: new Date(),
            title: "What a good dayyyyyyyyyyyyyyy! :)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a cursus sem. Pellentesque venenatis blandit justo. Sed nec turpis venenatis, laoreet ligula sed, posuere leo. Integer blandit sem sit amet fringilla bibendum. Sed lorem nulla, gravida vitae vehicula et, condimentum eu massa. Integer imperdiet dignissim ipsum, id laoreet lorem euismod sit amet. Aenean porttitor hendrerit lorem in consequat. Aenean non dignissim nunc. Sed vel fermentum sem. Proin convallis, sem vel laoreet pharetra, tortor ante bibendum diam, vitae tristique magna erat id tortor. Aenean a lectus aliquet, scelerisque massa quis, pellentesque sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare massa vitae lectus mattis, at scelerisque neque luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec interdum luctus lacus semper tempor.",
            mood: "sad",
        },
        {
            dateTime: new Date(),
            title: "What a good day! :)",
            description: "I had an amazing evening",
            mood: "awful",
        },
    ],
};

const App = () => {
    const [userData, setUserData] = useState(initialState);

    return (
        <Router>
            <Switch>
                <Route path="/new">
                    <AddMood setUserData={setUserData} />
                </Route>
                <Route path="/">
                    <MoodJournal userData={userData} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
