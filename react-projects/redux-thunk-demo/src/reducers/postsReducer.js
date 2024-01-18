const initialState = {
    posts: [],
    post: {}
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, posts: action.payload };
        case 'GET_POST_BY_ID':
            return { ...state, post: action.payload };
        case 'DELETE':
        case 'UPDATE':
        default:
            return state;
    }
}
export default PostsReducer;