import React, { Component } from "react";
import { render } from "react-dom";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import UncontrolledComponentWithForwardRef from "./UncontrolledComponentWithForwardRef";
import UncontrolledComponentWithUseRefHook from "./UncontrolledComponentWithUseRefHook";
import CreateRefvsUseRef from "./createRef-vs-useRef";

class App extends Component {
    state = { inputValue: "" };

    setInputValue = event => {
        // console.log('event', event.target.value);
        this.setState({ inputValue: event.target.value });
    };

    makeUppercase = () => {
        const value = this.ref.current.value;
        this.ref.current.value = value.toUpperCase();
    };

    ref = React.createRef();

    render() {
        // console.log("state", this.state);

        return (
            <div>
                <ControlledComponent
                    inputValue={this.state.inputValue}
                    handleInputChange={this.setInputValue}
                />
                <UncontrolledComponent />
                <br /> <br /> <hr />
                <UncontrolledComponentWithForwardRef
                    handleButtonClick={this.makeUppercase}
                    ref={this.ref}
                />
                <br /> <br /> <hr />
                <UncontrolledComponentWithUseRefHook />
                <br /> <br /> <br /> <hr />
                <h3>Let's compare createRef() & useRef()</h3>
                <CreateRefvsUseRef />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
