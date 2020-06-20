import React, { useRef } from "react";

const ControlledComponent = props => {
    const { handleInputChange, handleButtonClick, handleSquareButtonClick, inputValue } = props;

    return (
        <>
            <p>Controlled Component</p>
            <input
                id='controlled'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Uppercase</button>
            <button onClick={handleSquareButtonClick}>Square</button>
        </>
    );
};

export default ControlledComponent;
