import axios from 'axios';

const api = 'http://localhost:3001'
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Authorization': token,
}


/**
 * GET /categories
 *    USAGE:
 *      Get all of the categories available for the app. List is found in categories.js.
 *      Feel free to extend this list as you desire.
 */


export const fetchCategories = () => {
    return axios ({
        method: 'get',
        url: `${api}/categories`,
        headers: {...headers}
    }).then((res) => res.data.categories)
}

/**
 *GET /:category/posts
 USAGE:
 Get all of the posts for a particular category
 *
 */
export const fetchPostsByCategory = (category) => {
    return axios ({
        method: 'get',
        url: `${api}/${category}/posts`,
        headers: {...headers}
    }).then(res => res.data)
}

/**
 * GET /posts
 USAGE:
 Get all of the posts. Useful for the main page when no category is selected.

 */

export const fetchAllPosts = () => {
    return axios ({
        method: 'get',
        url: `${api}/posts`,
        headers: {...headers}
        }).then(res => res.data)

}


/**
 * POST /posts
 USAGE:
 Add a new post
 PARAMS:
 id - UUID should be fine, but any unique id will work
 timestamp - timestamp in whatever format you like, you can use Date.now() if you like
 title - String
 body - String
 author - String
 category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

 */
export const addPost = (post) => {
    return axios({
        method: 'post',
        url: `${api}/posts`,
        headers: headers,
        data: post,
    }).then(res => res.data)
}

/**
 * GET /posts/:id
 USAGE:
 Get the details of a single post

 */

export const getPost = (id) => {
    return axios({
        method: 'get',
        url: `${api}/posts/${id}`,
        headers: headers,
    }).then(res => res.data)
}

/**
 * POST /posts/:id
 USAGE:
 Used for voting on a post
 PARAMS:
 option - String: Either "upVote" or "downVote"

 */

export const votePost = (id, option) => {
    return axios({
        method: 'post',
        url: `${api}/posts/${id}`,
        // data: option
        // 이게 아니라 data: {option: option} 이렇게  넣어줘야 한다는데
        // 그걸 내가 어떻게 알지 진짜아??
        data: {option: option},
        headers: headers,
    }).then(res => res.data)
}

/**
 * PUT /posts/:id
 USAGE:
 Edit the details of an existing post
 PARAMS:
 title - String
 body - String

 */

export const editPost = (id, post) => {
    return axios({
        method: 'put',
        url: `${api}/posts/${id}`,
        data: post,
        headers: headers,
    }).then(res => res.data)
}


/**
 * DELETE /posts/:id
 USAGE:
 Sets the deleted flag for a post to 'true'.
 Sets the parentDeleted flag for all child comments to 'true'.
 ( flag 는 field 라고 이해하자 )
 */

export const deletePost = (id) => {
    return axios({
        method: 'delete',
        url: `${api}/posts/${id}`,
        headers: headers,
    }).then(res => res.data)
}

/**
 * GET /posts/:id/comments
 USAGE:
 Get all the comments for a single post

 */

export const fetchComments = (id) => {
    return axios ({
        method: 'get',
        url: `${api}/posts/${id}/comments`,
        headers: {...headers}
    }).then((res) => res.data)
}



/**
 * POST /comments
 USAGE:
 Add a comment to a post

 PARAMS:
 id: Any unique ID. As with posts, UUID is probably the best here.
 timestamp: timestamp. Get this however you want.
 body: String
 author: String
 parentId: Should match a post id in the database.

 */


export const addComment = (comment) => {
    return axios({
        method: 'post',
        url: `${api}/comments`,
        headers: headers,
        data: comment,
    }).then(res => res.data)
}

/**
 * GET /comments/:id
 USAGE:
 Get the details for a single comment

 */

export const fetchComment = (id)  => {
    return axios({
        method: 'get',
        url: `${api}/comments/${id}`,
        headers: {...headers}
    }).then(res => res.data)
}
/**
 * POST /comments/:id
 USAGE:
 Used for voting on a comment.
 PARAMS:
 option - String: Either "upVote" or "downVote"
 */

export const voteComment = (id, option)  => {
    return axios({
        method: 'post',
        url: `${api}/comments/${id}`,
        data: {option : option},
        headers: {...headers}
    }).then(res => res.data)
}

/**
 * PUT /comments/:id
 USAGE:
 Edit the details of an existing comment

 PARAMS:
 timestamp: timestamp. Get this however you want.
 body: String

 */

export const editComment = (id, comment) => {
    return axios({
        method: 'put',
        url: `${api}/comments/${id}`,
        data: comment,
        headers: {...headers}
    }).then(res => res.data)
}

/**
 * DELETE /comments/:id
 USAGE:
 Sets a comment's deleted flag to 'true'

 */

export const deleteComment = (id) => {
    return axios({
        method: 'delete',
        url: `${api}/comments/${id}`,
        headers: {...headers}
    }).then(res => res.data)
}

