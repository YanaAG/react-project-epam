import React from "react";

class MouseTracker extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = e => {
        this.setState({ x: e.clientX, y: e.clientY });
    };

    render() {
        const { x, y } = this.state;
        const {render, render1} = this.props;
        return (
            <div style={{ height: "30vh", cursor: "none"}} onMouseMove={this.handleMouseMove}>
                <div>
                    The current position is X:{x} Y:{y}
                    {render(this.state)}
                </div>
            </div>
        );
    }
}

export default MouseTracker;
