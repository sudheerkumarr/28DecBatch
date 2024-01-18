import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsAction } from '../actions/postsAction';
const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch action to get all posts from server
        // and store in 'store'
        dispatch(getAllPostsAction());
    }, [])

    const posts = useSelector((state) => state);

    return (

        < table className="table" >
            {console.log()}
            <thead></thead>
            <tbody>
                {posts.posts.posts.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.userId}</td>
                        <td>{p.title}</td>
                        <td>{p.body}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}

export default Posts;