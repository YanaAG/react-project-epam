import React, { useState } from "react";
import { render } from "react-dom";

import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import UncontrolledComponentWithForwardRef from "./UncontrolledComponentWithForwardRef";
import UncontrolledComponentWithUseRefHook from "./UncontrolledComponentWithUseRefHook";
import CreateRefvsUseRef from "./createRef-vs-useRef";

import CircleMouseTracker from "./HOCs/CircleTracker";
import SquareMouseTracker from "./HOCs/SquareTracker";

const App = () => {
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = () => {
        const valueToUpperCase = inputValue.toUpperCase();
        setInputValue(valueToUpperCase);
    };

    const handleSquareButtonClick = () => {
        const numberToSquare = Number(inputValue);
        if (!isNaN(numberToSquare)) {
            setInputValue(numberToSquare ** 2);
        } else {
            alert("Wrong type");
        }
    };

    const makeUppercase = () => {
        const value = ref.current.value;
        ref.current.value = value.toUpperCase();
    };

    const squareNumber = () => {
        const numberToSquare = Number(ref.current.value);
        if (!isNaN(numberToSquare)) {
            ref.current.value = numberToSquare ** 2;
        } else {
            alert("Wrong type");
        }
    };

    const ref = React.createRef();

    return (
        <div>
            {/*<CircleMouseTracker/>*/}
            <SquareMouseTracker/>

            <ControlledComponent
                inputValue={inputValue}
                handleInputChange={event => setInputValue(event.target.value)}
                handleButtonClick={handleButtonClick}
                handleSquareButtonClick={handleSquareButtonClick}
            />
            <UncontrolledComponent />
            <br /> <br /> <hr />
            <UncontrolledComponentWithForwardRef
                handleButtonClick={makeUppercase}
                handleSquareButtonClick={squareNumber}
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
