import React from "react";
import withMouseTracker from "./withMouseTracker";

const SquareTracker = props => {
    const { position } = props;

    const style = {
        height: "10px",
        width: "10px",
        backgroundColor: "blue",
        position: "absolute",
        top: position.y,
        left: position.x
    };

    return <div style={style} />;
};

const SquareMouseTracker = withMouseTracker(SquareTracker);

export default SquareMouseTracker;
