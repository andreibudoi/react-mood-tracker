import React from "react";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined"; //Great
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied"; //Good
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined"; //Ok
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

const greatMoodColor = {
    primary: "#76e2b3",
    hover: "#eafdf4",
};

const goodMoodColor = {
    primary: "#62b4f9",
    hover: "#daedfc",
};

const okMoodColor = {
    primary: "#a482cc",
    hover: "#f4ebff",
};

const sadMoodColor = {
    primary: "#f5b748",
    hover: "#fff1db",
};

const awfulMoodColor = {
    primary: "#ec536f",
    hover: "#ffd2da",
};

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
        color: awfulMoodColor.primary,
        "&:hover": {
            backgroundColor: awfulMoodColor.hover,
        },
    },
    moodBtn__awful_on: {
        backgroundColor: awfulMoodColor.primary,
        "&:hover": {
            backgroundColor: awfulMoodColor.primary,
        },
    },

    moodBtn__sad_off: {
        color: sadMoodColor.primary,
        "&:hover": {
            backgroundColor: sadMoodColor.hover,
        },
    },
    moodBtn__sad_on: {
        backgroundColor: sadMoodColor.primary,
        "&:hover": {
            backgroundColor: sadMoodColor.primary,
        },
    },

    moodBtn__ok_off: {
        color: okMoodColor.primary,
        "&:hover": {
            backgroundColor: okMoodColor.hover,
        },
    },
    moodBtn__ok_on: {
        backgroundColor: okMoodColor.primary,
        "&:hover": {
            backgroundColor: okMoodColor.primary,
        },
    },

    moodBtn__good_off: {
        color: goodMoodColor.primary,
        "&:hover": {
            backgroundColor: goodMoodColor.hover,
        },
    },
    moodBtn__good_on: {
        backgroundColor: goodMoodColor.primary,
        "&:hover": {
            backgroundColor: goodMoodColor.primary,
        },
    },

    moodBtn__great_off: {
        color: greatMoodColor.primary,
        "&:hover": {
            backgroundColor: greatMoodColor.hover,
        },
    },
    moodBtn__great_on: {
        backgroundColor: greatMoodColor.primary,
        "&:hover": {
            backgroundColor: greatMoodColor.primary,
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
