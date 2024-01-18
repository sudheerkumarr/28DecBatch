//sfc
// React hook methods - useState() - define state in functional component


import { useSelector, useDispatch } from 'react-redux';
import { incrementAction, decrementAction } from '../actions/counterActions';

const Counter = () => {
    // define initial state in functional component
    //const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    // get count value from store
    const count = useSelector((state) => state.count);

    // increment function
    const increment = () => {
        // dispatch increment action when use clicks 'incr' btn
        dispatch(incrementAction());
    }
    // decrement function
    const decrement = () => {
        // dispatch decrement action
        dispatch(decrementAction());
    }
    return (
        <div>
            <h1>Counter Component</h1>
            <div className="d-flex">
                <button className="btn btn-primary" onClick={decrement}>Decrement</button>
                <p className="mx-2">{count}</p>
                <button className="btn btn-secondary" onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;
