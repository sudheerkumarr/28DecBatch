//sfc
// React hook methods - useState() - define state in functional component
import { useState } from "react";
import Count from "./count";
const Counter = () => {
    // define initial state in functional component
    const [count, setCount] = useState(0);

    // increment function
    const increment = () => {
        setCount(count + 1);
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