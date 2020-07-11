import React from "react";
import { render } from "react-dom";
import { Provider, useSelector } from "react-redux";
import "./style.css";
import "./action-creator";
import store from "./redux";

const App = () => {
    const count = useSelector(state => state);

    return (
        <>
            <p>{count}</p>
            <button className="button-minus" onClick={() => store.dispatch({ type: "DECREMENT" })}>-</button>
            <button className="button-plus" onClick={() => store.dispatch({ type: "INCREMENT" })}>+</button>
        </>
    );
};

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
