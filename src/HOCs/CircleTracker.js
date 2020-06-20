import React from "react";
import withMouseTracker from "./withMouseTracker";

const CircleTracker = props => {
    const { position } = props;

    const style = {
        height: "15px",
        width: "15px",
        backgroundColor: "red",
        position: "absolute",
        top: position.y,
        left: position.x,
        borderRadius: "50%"
    };

    return <div style={style} />;
};

const CircleMouseTracker = withMouseTracker(CircleTracker);

export default CircleMouseTracker;
