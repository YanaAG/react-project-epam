import React, { useState } from "react";
import { render } from "react-dom";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import UncontrolledComponentWithForwardRef from "./UncontrolledComponentWithForwardRef";
import UncontrolledComponentWithUseRefHook from "./UncontrolledComponentWithUseRefHook";
import CreateRefvsUseRef from "./createRef-vs-useRef";

const App = () => {
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = () => {
        const valueToUpperCase = inputValue.toUpperCase();
        setInputValue(valueToUpperCase);
    };

    const makeUppercase = () => {
        const value = ref.current.value;
        ref.current.value = value.toUpperCase();
    };

    const ref = React.createRef();

    return (
        <div>
            <ControlledComponent
                inputValue={inputValue}
                handleInputChange={event => setInputValue(event.target.value)}
                handleButtonClick={handleButtonClick}
            />
            <UncontrolledComponent />
            <br /> <br /> <hr />
            <UncontrolledComponentWithForwardRef
                handleButtonClick={makeUppercase}
                ref={ref}
            />
            <br /> <br /> <hr />
            <UncontrolledComponentWithUseRefHook />
            <br /> <br /> <br /> <hr />
            <h3>Let's compare createRef() & useRef()</h3>
            <CreateRefvsUseRef />
        </div>
    );
};

render(<App />, document.getElementById("root"));
