// const Count = (props) => {
//     return (
//         <div className="d-flex">
//             <button className="btn btn-primary" onClick={props.decrement}>Decrement</button>
//             <p className="mx-2">{props.count}</p>
//             <button className="btn btn-secondary" onClick={props.increment}>Increment</button>
//         </div>
//     );
// }

const Count = ({ count, increment, decrement }) => {
    return (
        <div className="d-flex">
            <button className="btn btn-primary" onClick={decrement}>Decrement</button>
            <p className="mx-2">{count}</p>
            <button className="btn btn-secondary" onClick={increment}>Increment</button>
        </div>
    );
}

export default Count;