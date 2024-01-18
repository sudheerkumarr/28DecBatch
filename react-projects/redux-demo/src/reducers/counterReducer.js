let intialState = 0;

const CounterReducer = (state = intialState, action) => {
    switch (action.name) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}