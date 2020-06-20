import React, {useState} from "react";

const CreateRefvsUseRef = () => {
    const [renderIndex, setRenderIndex] = React.useState(1);
    const refFromUseRef = React.useRef();
    const refFromCreateRef = React.createRef();

    if (!refFromUseRef.current) {
        refFromUseRef.current = renderIndex;
    }

    if (!refFromCreateRef.current) {
        refFromCreateRef.current = renderIndex;
    }

    return (
        <>
            <p>Current render index: {renderIndex}</p>
            <p>
                <b>refFromUseRef returns the same ref each time</b> value: {refFromUseRef.current}
            </p>
            <p>
                <b>refFromCreateRef returns a new ref on every render</b> value:{refFromCreateRef.current}
            </p>

            <button onClick={() => setRenderIndex(prev => prev + 1)}>
                Cause re-render
            </button>
        </>
    );
};
export default CreateRefvsUseRef;
