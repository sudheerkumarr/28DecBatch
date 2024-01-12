//sfc
// React hook methods - useState() - define state in functional component
import { useState } from "react";
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
            <div className="d-flex">
                <button className="btn btn-primary" onClick={decrement}>Decrement</button>
                <p className="mx-2">{count}</p>
                <button className="btn btn-secondary" onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;