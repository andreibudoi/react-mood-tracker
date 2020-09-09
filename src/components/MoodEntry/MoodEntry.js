import React from "react";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined"; //Great
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined"; //Good
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied"; //Ok
import SentimentDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentDissatisfiedOutlined"; //Sad
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined"; //Awful
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import "./MoodEntry.css";
import moment from "moment";

const moodColors = {
    great: {
        primary: "#76e2b3",
        secondary: "#eafdf4",
        tertiary: "#2e5745",
    },
    good: {
        primary: "#62b4f9",
        secondary: "#daedfc",
        tertiary: "#2D5372",
    },
    ok: {
        primary: "#a482cc",
        secondary: "#f4ebff",
        tertiary: "#4B3C5E",
    },
    sad: {
        primary: "#f5b748",
        secondary: "#fff1db",
        tertiary: "#705421",
    },
    awful: {
        primary: "#ec536f",
        secondary: "#ffd2da",
        tertiary: "#6C2633",
    },
};

const iconSize = {
    desktop: {
        scale: "scale(2)",
    },
    tablet: {
        scale: "scale(1.5)",
    },
    mobile: {
        scale: "scale(1.2)",
    },
};

const useStyles = makeStyles({
    svgIcon: {
        transform: (size) => size.scale,
    },
});

const MoodEntry = ({ entryData }) => {
    const { date, title, description, mood } = entryData;

    const isMobileDevice = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const isTabletDevice = useMediaQuery({
        query: "(max-width: 1224px)",
    });

    const classes = useStyles(
        isMobileDevice
            ? iconSize.mobile
            : isTabletDevice
            ? iconSize.tablet
            : iconSize.desktop
    );

    const moodIcons = {
        great: (
            <SentimentVerySatisfiedOutlinedIcon
                className={classes.svgIcon}
                fontSize="large"
            />
        ),
        good: (
            <SentimentSatisfiedOutlinedIcon
                className={classes.svgIcon}
                fontSize="large"
            />
        ),
        ok: (
            <SentimentSatisfiedIcon
                className={classes.svgIcon}
                fontSize="large"
            />
        ),
        sad: (
            <SentimentDissatisfiedOutlinedIcon
                className={classes.svgIcon}
                fontSize="large"
            />
        ),
        awful: (
            <SentimentVeryDissatisfiedOutlinedIcon
                className={classes.svgIcon}
                fontSize="large"
            />
        ),
    };

    return (
        <div
            className="entry"
            style={{
                color: moodColors[mood].tertiary,
            }}
        >
            <div
                className="entry-header"
                style={{
                    backgroundColor: moodColors[mood].primary,
                }}
            >
                {moodIcons[mood]}
                <div className="entry-datetime">
                    {moment(date).format("MMMM Do YYYY, HH:mm").toString()}
                </div>
            </div>
            <div
                className="entry-body"
                style={{
                    backgroundColor: moodColors[mood].secondary,
                }}
            >
                <div className="entry-title">{title}</div>
                <div className="entry-description">{description}</div>
            </div>
        </div>
    );
};

export default MoodEntry;
