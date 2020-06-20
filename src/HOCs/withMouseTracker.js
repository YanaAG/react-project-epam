import React, { useState } from "react";

const withMouseTracker = WrappedComponent =>
    class MouseTracker extends React.Component {
        state = {
            x: 0,
            y: 0
        };

        handleMouseMove = event => {
            this.setState({ x: event.clientX, y: event.clientY });
        };

        render() {
            const { x, y } = this.state;
            return (
                <div style={{ height: "30vh", cursor: "none" }} onMouseMove={this.handleMouseMove}>
                    <div>
                        The current position is X:{x} Y:{y}
                        <WrappedComponent position={this.state} />
                    </div>
                </div>
            );
        }
    };

export default withMouseTracker;
