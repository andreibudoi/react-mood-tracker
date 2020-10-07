import React from "react";
import "./DescriptionInput.css";
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
    },
});

const DescriptionInput = ({ description, setDescription }) => {
    const classes = useStyles();

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <div className="description">
            <TextField
                value={description}
                onChange={handleChange}
                fullWidth={true}
                label="Add some notes ..."
                InputLabelProps={{
                    shrink: true,
                }}
                multiline={true}
                rows={4}
                className={classes.root}
            />
        </div>
    );
};

export default DescriptionInput;
