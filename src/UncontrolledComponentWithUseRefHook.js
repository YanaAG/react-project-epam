import React, {useRef, useState} from 'react';

// 5. UseRef
const UncontrolledComponentWithUseRefHook = () => {
    const textInput = useRef();
    const [count, setCount] = useState(0);

    // let textInput = React.createRef(); //Always prints 'null'
    console.log(textInput.current && textInput.current.value);


    const handleClick = () => {
        const value = textInput.current.value;
        textInput.current.value = value.toUpperCase();
    };

    const handleSquareClick = () => {
        const numberToSquare = textInput.current.value;
        if (!isNaN(numberToSquare)) {
            textInput.current.value = numberToSquare ** 2;
        } else {
            alert("Wrong type");
        }
    };

    return (
        <>
            <p>Uncontrolled Component With UseRef Hook </p>
            <input ref={textInput} />
            <button onClick={handleClick}>Uppercase</button>
            <button onClick={handleSquareClick}>Square</button>
            <button onClick={() => setCount(count + 1)}>Cause re-render</button>
        </>
    );
};

export default UncontrolledComponentWithUseRefHook;
