import React from "react";

class CircleTracker extends React.Component {
    render() {
        const { position } = this.props;

        const style = {
            height: "15px",
            width: "15px",
            'background-color': 'red',
            position: 'absolute',
            top: position.y,
            left: position.x,
            'border-radius': '50%'
        };

        return <div style={style} />;
    }
}

export default CircleTracker;
