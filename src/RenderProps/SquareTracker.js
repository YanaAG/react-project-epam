import React from "react";

class SquareTracker extends React.Component {
    render() {
        const { position } = this.props;

        const style = {
            height: "10px",
            width: "10px",
            "background-color": "blue",
            position: 'absolute',
            top: position.y,
            left: position.x,
        };

        return <div style={style} />;
    }
}

export default SquareTracker;
