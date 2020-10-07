import React from "react";
import "./TitleInput.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        "& label.Mui-focused": {
            color: "#19d483",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#19d483",
        },
        "& .MuiTextField-root": {
            color: "#19d483",
        },
    },
});

const TitleInput = ({ title, setTitle }) => {
    const classes = useStyles();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="title">
            <TextField
                value={title}
                onChange={handleChange}
                fullWidth={true}
                label="Moment title"
                InputLabelProps={{
                    shrink: true,
                }}
                className={classes.root}
            />
        </div>
    );
};

export default TitleInput;
