import axios from "axios";

class PostService {

    baseUrl = "https://jsonplaceholder.typicode.com";

    // GET
    async getAllPosts() {
        //https://jsonplaceholder.typicode.com/posts
        const res = await axios.get(this.baseUrl + "/posts");
        // promise obj - state - pending, suceess, reject
        // to get data from promise object use then() or catch() methods
        return res;
    }


    // GET Single post
    async getPostById(id) {
        //https://jsonplaceholder.typicode.com/posts
        const res = await axios.get(this.baseUrl + `/posts/${id}`);
        // promise obj - state - pending, suceess, reject
        // to get data from promise object use then() or catch() methods
        return res;
    }

    // POST
    async addPost(data) {
        const res = await axios.post(this.baseUrl + "/posts", data);
        return res;
    }

    // PUT
    async updatePost(id, updatedPostDetails) {
        const res = await axios.put(this.baseUrl + `/posts/${id}`, updatedPostDetails);
        return res;
    }

    // DELETE
    async deletePost(id) {
        const res = await axios.delete(this.baseUrl + `/posts/${id}`);
        return res;
    }

    // PATCH
    async updatePostTitle(id, newTitle) {
        const res = await axios.patch(this.baseUrl + `/posts/${id}`, newTitle);
        return res;
    }
}

export default new PostService();