import React from "react";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined"; //Great
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined"; //Good
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied"; //Ok
import SentimentDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentDissatisfiedOutlined"; //Sad
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined"; //Awful
import IconButton from "@material-ui/core/IconButton";
import "./MoodSelector.css";
import { makeStyles } from "@material-ui/core/styles";

import { useMediaQuery } from "react-responsive";

const btnSize = {
    desktop: {
        padding: "20px",
        margin: "10px",
        scale: "scale(1.6)",
    },
    tablet: {
        padding: "15px",
        margin: "6px",
        scale: "scale(1.3)",
    },
    mobile: {
        padding: "10px",
        margin: "3px",
        scale: "scale(1.2)",
    },
};

const moodColors = {
    "great" : {
        primary: "#76e2b3",
        secondary: "#eafdf4",
        tertiary: "#2e5745"
    },
    "good": {
        primary: "#62b4f9",
        secondary: "#daedfc",
        tertiary: "#2D5372"
    },
    "ok": {
        primary: "#a482cc",
        secondary: "#f4ebff",
        tertiary: "#4B3C5E"
    },
    "sad": {
        primary: "#f5b748",
        secondary: "#fff1db",
        tertiary: "#705421"
    },
    "awful": {
        primary: "#ec536f",
        secondary: "#ffd2da",
        tertiary: "#6C2633"
    }
}



const useStyles = makeStyles({
    root: {
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
        padding: (size) => size.padding,
        margin: (size) => size.margin,
    },

    svgIcon: {
        transform: (size) => size.scale,
    },

    moodBtn__awful_off: {
        color: moodColors["awful"].primary,
        "&:hover": {
            backgroundColor: moodColors["awful"].secondary,
        },
    },
    moodBtn__awful_on: {
        backgroundColor: moodColors["awful"].primary,
        "&:hover": {
            backgroundColor: moodColors["awful"].primary,
        },
    },

    moodBtn__sad_off: {
        color: moodColors["sad"].primary,
        "&:hover": {
            backgroundColor: moodColors["sad"].secondary,
        },
    },
    moodBtn__sad_on: {
        backgroundColor: moodColors["sad"].primary,
        "&:hover": {
            backgroundColor: moodColors["sad"].primary,
        },
    },

    moodBtn__ok_off: {
        color: moodColors["ok"].primary,
        "&:hover": {
            backgroundColor: moodColors["ok"].secondary,
        },
    },
    moodBtn__ok_on: {
        backgroundColor: moodColors["ok"].primary,
        "&:hover": {
            backgroundColor: moodColors["ok"].primary,
        },
    },

    moodBtn__good_off: {
        color: moodColors["good"].primary,
        "&:hover": {
            backgroundColor: moodColors["good"].secondary,
        },
    },
    moodBtn__good_on: {
        backgroundColor: moodColors["good"].primary,
        "&:hover": {
            backgroundColor: moodColors["good"].primary,
        },
    },

    moodBtn__great_off: {
        color: moodColors["great"].primary,
        "&:hover": {
            backgroundColor: moodColors["great"].secondary,
        },
    },
    moodBtn__great_on: {
        backgroundColor: moodColors["great"].primary,
        "&:hover": {
            backgroundColor: moodColors["great"].primary,
        },
    },
});

const MoodSelector = ({ mood, setMood }) => {
    const isMobileDevice = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const isTabletDevice = useMediaQuery({
        query: "(max-width: 1224px)",
    });

    const classes = useStyles(
        isMobileDevice
            ? btnSize.mobile
            : isTabletDevice
            ? btnSize.tablet
            : btnSize.desktop
    );

    const handleChange = (selectedMood) => () => {
        console.log(selectedMood);
        setMood(selectedMood);
    };

    return (
        <div className="moodBtns">
            <IconButton
                className={`${classes.root} ${
                    mood === "awful"
                        ? classes.moodBtn__awful_on
                        : classes.moodBtn__awful_off
                }`}
                onClick={handleChange("awful")}
            >
                <SentimentVeryDissatisfiedOutlinedIcon
                    className={classes.svgIcon}
                    fontSize="large"
                />
            </IconButton>

            <IconButton
                className={`${classes.root} ${
                    mood === "sad"
                        ? classes.moodBtn__sad_on
                        : classes.moodBtn__sad_off
                }`}
                onClick={handleChange("sad")}
            >
                <SentimentDissatisfiedOutlinedIcon
                    className={classes.svgIcon}
                    fontSize="large"
                />
            </IconButton>

            <IconButton
                className={`${classes.root} ${
                    mood === "ok"
                        ? classes.moodBtn__ok_on
                        : classes.moodBtn__ok_off
                }`}
                onClick={handleChange("ok")}
            >
                <SentimentSatisfiedIcon
                    className={classes.svgIcon}
                    fontSize="large"
                />
            </IconButton>

            <IconButton
                className={`${classes.root} ${
                    mood === "good"
                        ? classes.moodBtn__good_on
                        : classes.moodBtn__good_off
                }`}
                onClick={handleChange("good")}
            >
                <SentimentSatisfiedOutlinedIcon
                    className={classes.svgIcon}
                    fontSize="large"
                />
            </IconButton>

            <IconButton
                className={`${classes.root} ${
                    mood === "great"
                        ? classes.moodBtn__great_on
                        : classes.moodBtn__great_off
                }`}
                onClick={handleChange("great")}
            >
                <SentimentVerySatisfiedOutlinedIcon
                    className={classes.svgIcon}
                    fontSize="large"
                />
            </IconButton>
        </div>
    );
};

export default MoodSelector;
