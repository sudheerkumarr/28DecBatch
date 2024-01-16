import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const UpdatePost = () => {
    const [post, setPost] = useState(
        {}
    )

    // Get post id from url
    const params = useParams();

    const navigate = useNavigate();

    // get post data by using id at the time of page loading
    useEffect(() => {
        console.log(params)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = (event) => {
        console.log(event)
        console.log(event.target.name); // returns name of the field user clicked
        console.log(event.target.value); // value entered by the user in the form field

        let newPost = { ...post };
        // newPost.id = 10;
        // newPost['id'] = 10;
        newPost[event.target.name] = event.target.value;
        // newPost[id]=012

        // update post object with data entered by user in the form
        setPost(newPost);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // logic to send form data to backend using axios
        //axios.post(url, data)
        axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}`, post)
            .then(res => {
                console.log(res)
                window.alert("Update post successfully!")
                navigate("/posts");
            })
            .catch(err => console.log(err))

    }



    return (
        <div className="w-50 mx-auto mt-5 border p-3">
            <h3>Update Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="postId">Post Id</label>
                    <input value={post.id} disabled name="id" onChange={handleChange} className="form-control" id="postId" type="number" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="userId">User Id</label>
                    <input onChange={handleChange} name="userId" value={post.userId} className="form-control" id="userId" type="number" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input name="title" onChange={handleChange} value={post.title} className="form-control" id="title" type="text" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="body">Body</label>
                    <input name="body" onChange={handleChange} value={post.body} className="form-control" id="body" type="text" />
                </div>
                <input type="submit" className="btn btn-secondary" />
            </form >
        </div>
    );
}

export default UpdatePost;