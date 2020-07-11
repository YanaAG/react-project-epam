import { createStore } from "redux";

//REDUCER
function reducer(count = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return count + 1;
        case "DECREMENT":
            return count - 1;
        default:
            return count;
    }
}

//STORE
const store = createStore(reducer);

//subscribe & getState
store.subscribe(() => {
    console.log(store.getState());
});

export default store;
