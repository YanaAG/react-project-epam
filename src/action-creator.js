const redux = require("redux");

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function squareCount() {
    return {
        type: "SQUARE_COUNT"
    }
}

function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                count: state.count + action.payload
            };
        case "SQUARE_COUNT":
            return {
                count: state.count ** 2
            };
        default:
            return state
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    const { count } = store.getState();
    console.log('action creator', count);
});

store.dispatch(changeCount(5));
store.dispatch(changeCount(5));
store.dispatch(changeCount(-5));

store.dispatch(squareCount());
store.dispatch(squareCount());
store.dispatch(squareCount());
