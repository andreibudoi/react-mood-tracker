import React from "react";
import PaperContainer from "../../containers/PaperContainer/PaperContainer";
import MoodEntry from "../MoodEntry/MoodEntry";
import TextHeader from "../TextHeader/TextHeader";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import AddIcon from "@material-ui/icons/Add";
import "./MoodJournal.css";
import { Link } from "react-router-dom";

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
const useStyles = makeStyles({
    root: {
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
        padding: (size) => size.padding,
        margin: (size) => size.margin,
        backgroundColor: "#76e2b3",
        "&:hover": {
            backgroundColor: "#76e2b3",
        },
    },

    svgIcon: {
        transform: (size) => size.scale,
    },
});

const MoodJournal = ({ userData }) => {
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

    return (
        <div className="mood-journal">
            <PaperContainer noShadow={true}>
                <div className="mood-journal-header">
                    <TextHeader text={`Hello, ${userData.name} !`} />

                    <IconButton
                        className={classes.root}
                        component={Link}
                        to="/new"
                    >
                        <AddIcon className={classes.svgIcon} fontSize="large" />
                    </IconButton>
                </div>
            </PaperContainer>

            {userData.entries.map((entry) => {
                return (
                    <PaperContainer>
                        <MoodEntry entryData={entry} />
                    </PaperContainer>
                );
            })}
        </div>
    );
};

export default MoodJournal;
