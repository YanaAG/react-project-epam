import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "./action-creator";
const redux = require("redux");

const App = () => {

    const initialState = {
        count: 0
    };

    //REDUCER
    function reducer(state = initialState, action) {
        switch (action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1
                };
            case "DECREMENT":
                return {
                    count: state.count - 1
                };
            default:
                return state;
        }
    }

    //STORE
    const store = redux.createStore(reducer);
    // console.log("store", store);

    //subscribe & getState
    store.subscribe(() => {
        console.log(store.getState());
    });

    //dispatch
    store.dispatch({ type: "INCREMENT" });
    store.dispatch({ type: "INCREMENT" });
    store.dispatch({ type: "DECREMENT" });

    return (
        <div>
            <p>Start editing to see some magic happen :)</p>
        </div>
    );
};

render(<App />, document.getElementById("root"));

//ACTION
// const action = {
//     type: "INCREMENT",
//     payload: {}
// }

//ACTION CREATOR
// function increment() {
//     return {
//         type: "INCREMENT"
//     }
// }
