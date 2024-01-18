import { UseSelector, useSelector } from "react-redux";
const Home = () => {
    let count = useSelector((state) => state.count)
    return (
        <h1>Home count: {count}</h1>
    );
}

export default Home;