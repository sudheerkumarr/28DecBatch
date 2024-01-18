//sfc
// React hook methods - useState() - define state in functional component
import { useState } from "react";
import Count from "./count";
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
    // define initial state in functional component
    //const [count, setCount] = useState(0);

    // get count value from store
    const count = useSelector((state) => state.count);

    // increment function
    const increment = () => {
        //setCount(count + 1);

        // dispatch increment action when use clicks 'incr' btn
    }
    // decrement function
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Counter Component</h1>
            <Count count={count} increment={increment} decrement={decrement} />
        </div>
    )
}

export default Counter;