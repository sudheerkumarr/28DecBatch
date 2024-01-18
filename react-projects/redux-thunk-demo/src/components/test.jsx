import { useSelector } from "react-redux";
const Test = () => {
    const posts = useSelector(state => state.posts.posts)
    return (
        <table>
            <tbody>
                {posts.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.userId}</td>
                        <td>{p.title}</td>
                        <td>{p.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Test;