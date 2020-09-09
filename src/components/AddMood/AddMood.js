import React, { useState } from "react";
import "./AddMood.css";
import MoodSelector from "../MoodSelector/MoodSelector";
import TitleInput from "../TitleInput/TitleInput";
import DateTimeInput from "../DateTimeInput/DateTimeInput";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
import TextHeader from "../TextHeader/TextHeader";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import PaperContainer from "../../containers/PaperContainer/PaperContainer";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

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

const AddMood = () => {
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

    const [dateTime, setDateTime] = useState(moment());
    const [mood, setMood] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onButtonSubmit = () => {
        if (mood) {
            console.log({
                id: 12,
                dateTime: dateTime.toDate(),
                mood,
                title,
                description,
            });
        }
    };

    return (
        <div className="add-mood">
            <PaperContainer noShadow={true}>
                <TextHeader text={"How are you?"} />
            </PaperContainer>

            <PaperContainer>
                <DateTimeInput dateTime={dateTime} setDateTime={setDateTime} />
            </PaperContainer>

            <PaperContainer>
                <MoodSelector mood={mood} setMood={setMood} />
            </PaperContainer>

            <PaperContainer>
                <TitleInput title={title} setTitle={setTitle} />
            </PaperContainer>

            <PaperContainer>
                <DescriptionInput
                    description={description}
                    setDescription={setDescription}
                />
            </PaperContainer>

            <PaperContainer noShadow={true}>
                <IconButton className={classes.root} onClick={onButtonSubmit}>
                    <CheckCircleOutlinedIcon
                        className={classes.svgIcon}
                        fontSize="large"
                    />
                </IconButton>
            </PaperContainer>
        </div>
    );
};

export default AddMood;
