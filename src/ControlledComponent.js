import React, { useRef } from "react";

const ControlledComponent = props => {
    const { handleInputChange, handleButtonClick, inputValue } = props;

    return (
        <>
            <p>Controlled Component</p>
            <input
                id='controlled'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button>Uppercase</button>
            <button>Square</button>
        </>
    );
};

export default ControlledComponent;
