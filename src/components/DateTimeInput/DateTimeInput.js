import React from "react";
import "./DateTimeInput.css";
import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

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
const DateTimeInput = ({ dateTime, setDateTime }) => {
    const classes = useStyles();

    return (
        <div className="datetime">
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                    format={"MMMM Do YYYY, HH:mm"}
                    disableFuture={true}
                    ampm={false}
                    fullWidth={true}
                    variant="inline"
                    autoOk={true}
                    label="When?"
                    className={classes.root}
                    value={dateTime}
                    onChange={setDateTime}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default DateTimeInput;
