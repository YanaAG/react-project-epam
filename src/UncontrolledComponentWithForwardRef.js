import React from "react";

// 4. ForwardRef

const UncontrolledComponentWithForwardRef = React.forwardRef((props, ref) => {
    return (
        <>
            <p>Uncontrolled Component With ForwardRef;</p>
            <input ref={ref} />
            <button onClick={props.handleButtonClick}>Uppercase</button>
            <button onClick={props.handleSquareButtonClick}>Square</button>
        </>
    );
});

//Error
// const UncontrolledComponentWithForwardRef = (props) => {
//   return (
//     <>
//       <p>Uncontrolled Component With ForwardRef;</p>
//       <input ref={props.ref} />
//       <button onClick={props.handleButtonClick}>Uppercase</button>
//     </>
//   );
// };

export default UncontrolledComponentWithForwardRef;
