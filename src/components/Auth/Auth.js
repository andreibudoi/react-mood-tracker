import React, { useState } from "react";
import PaperContainer from "../../containers/PaperContainer/PaperContainer";
import TextHeader from "../TextHeader/TextHeader";
import Button from "@material-ui/core/Button";
import "./Auth.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    form: {
        width: "100%",
        "& label.Mui-focused": {
            color: "#19d483",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#19d483",
        },
    },
    submit: {
        marginTop: theme.spacing(2),
    },
}));

const Auth = ({ setAuth, setUserData }) => {
    let history = useHistory();
    const classes = useStyles();

    const [authType, setAuthType] = useState("signin");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitAuth = () => {
        axios
            .post(`https://quiet-earth-81142.herokuapp.com/${authType}`, {
                name,
                email,
                password,
            })
            .then((res) => res.data)
            .then((user) => {
                if (user.email) {
                    setUserData(user);
                    setAuth("true");
                    history.push("/");
                }
            })
            .catch((err) => console.log(err));
    };

    const handleAuthType = () => {
        authType === "signin" ? setAuthType("register") : setAuthType("signin");
    };

    return (
        <div className="auth">
            <PaperContainer noShadow>
                <TextHeader text={"Welcome !"} />
            </PaperContainer>

            <PaperContainer noShadow>
                <div className={classes.paper}>
                    <div className={classes.form}>
                        {authType === "register" && (
                            <TextField
                                value={name}
                                onChange={onNameChange}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Your Name"
                                name="name"
                            />
                        )}

                        <TextField
                            value={email}
                            onChange={onEmailChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            value={password}
                            onChange={onPasswordChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            onClick={onSubmitAuth}
                            type="submit"
                            style={{
                                backgroundColor: "#76e2b3",
                                color: "#2e5745",
                                fontFamily: "Montserrat",
                            }}
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            {authType === "signin" ? "Sign In" : "Register"}
                        </Button>

                        <Button
                            style={{
                                backgroundColor: "#76e2b3",
                                color: "#2e5745",
                                fontFamily: "Montserrat",
                            }}
                            variant="contained"
                            fullWidth
                            onClick={handleAuthType}
                            className={classes.submit}
                        >
                            {authType === "signin"
                                ? "Don't have an account? Register"
                                : "Already have an account? Sign In"}
                        </Button>
                    </div>
                </div>
            </PaperContainer>
        </div>
    );
};

export default Auth;
