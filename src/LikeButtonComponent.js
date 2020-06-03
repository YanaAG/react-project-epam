import React, { Component } from "react";
import { shallowEqual } from "@babel/types";

class ClassComponent extends Component {
    state = {
        name: "Angular"
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
    }

    changeName = () => {
        this.setState({ name: "Angular" });
    };

    render() {
        console.log("FirstComponent (ClassComponent) -- Render method called");
        return (
            <div>
                <p> Course is : {this.state.name} </p>
                <button onClick={this.changeName}>Like course</button>
            </div>
        );
    }
}

export default ClassComponent;
