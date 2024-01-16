import { useState } from 'react';
import axios from 'axios';
const AddPost = () => {
    // initial state of the component
    const [post, setPost] = useState(
        {
            id: 0,
            userId: 0,
            title: "",
            body: ""
        }
    );

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
        axios.post("https://jsonplaceholder.typicode.com/posts", post)
            .then(res => {
                console.log(res)
                window.alert("Added new post successfully!")
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="w-50 mx-auto border p-3 mt-5">
            < h3 > Add Post</h3 >
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="postId">Post Id</label>
                    <input value={post.id} name="id" onChange={handleChange} className="form-control" id="postId" type="number" />
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
        </div >
    );
}

export default AddPost;