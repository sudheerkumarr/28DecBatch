import axios from 'axios';

// GET
export const getAllPostsAction = () => async (dispatch) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data);
    dispatch({
        type: "GET_POSTS",
        payload: response.data,
    });
};
// function getAllPostsAction() {
//     return async function (dispatch) {
//         return {
//             type: "GET_POSTS",
//             payload: response.data,
//         }
//     }
// }


// POST

// PUT

// DELETE