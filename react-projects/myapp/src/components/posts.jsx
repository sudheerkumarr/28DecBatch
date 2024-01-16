import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    //useEffect(()=>function, [condition]);
    useEffect(() => {
        //axios.get(url)
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response);
                setPosts(response.data)
            })
            .catch(err => console.log(err))
    }, []);

    // Delete
    const handleDelete = (id) => {
        //axios.delete('url')
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.log(res);
                // logic to remove entry from frontend after successful deletion operation
                let oldArr = [...posts];
                let updatedArr = oldArr.filter(p => p.id != id);
                setPosts(updatedArr);
                window.alert(`Deleted post with id: ${id}`)
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <h1>Posts component</h1>
            <table className='table table-striped w-75 mx-auto'>
                <thead>
                    <tr>
                        <th>Post Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.userId}</td>
                                <td>{p.title}</td>
                                <td>{p.body}</td>
                                <td>
                                    <i className="bi bi-pencil-fill me-3" ></i>
                                    <i className="bi bi-trash3" onClick={() => handleDelete(p.id)}></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table >
        </>
    );
}

export default Posts;