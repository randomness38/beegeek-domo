import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../../actions";

class NavBar extends Component {

    state = {
        post: {}
    }

    componentDidMount() {
        const category = 'redux'
        const edit = {
            title: '위대한 작가가 되는 법2',
        }

        const post = {
                id: '8xf0y6ziyjabvozdd253nd',
                timestamp: 1467166872634,
                title: 'Udacity is the best place to learn React',
                body: 'Everyone says so after all.',
                author: 'thingtwo',
                category: 'react',
                voteScore: 6,
                deleted: false,
                commentCount: 2
        }
        const comment = {
            id: 'KKK',
            parentId: "8xf0y6ziyjabvozdd253nd",
            timestamp: Date.now(),
            body: '내가 다 ! 이기죠 !',
            author: '영재쨩',
        }
        const editComment = {
            id: '수우우우정',
            parentId: "8xf0y6ziyjabvozdd253nd",
            timestamp: Date.now(),
            body: '내이ㅣㄱ징 !',
            author: '자고싶다 ',
        }
        const id = "8xf0y6ziyjabvozdd253nd"
        const option = "upVote"
        const commentId = "KKK"
        // const commentId = "8tu4bsun805n8un48ve89"
        // getPost(id).then((post) => this.setState({post}))

        const {
            // Category
            doFetchCategories,
            // Post
            doFetchAllPosts,
            doFetchPostsByCategory,
            doAddPost,
            doGetPost,
            doVotePost,
            doEditPost,
            doDeletePost,
            // comments
            doFetchComments,
            doAddComment,
            doFetchComment,
            doVoteComment,
            doEditComment,
            doDeleteComment,
        } = this.props
        // doFetchComments(id)
        // doFetchComment(commentId)
        doDeleteComment(commentId)
    }

    render() {
        const id = "8xf0y6ziyjabvozdd253nd"
        const option = "downVote"
        const { posts } = this.props
        return (
            <div>
                {/*{this.props.categories.map((category) => {*/}
                    {/*return <p key={category.name}>{category.name}</p>*/}
                {/*})}*/}
                {/*{Object.keys(posts).map((key) => {*/}
                    {/*return <p>{posts[key].id}</p>*/}
                {/*})}*/}
            </div>
        )
    }
}

const mapStateToProps = ( state) => {
    return {
        categories : state.categories,
        posts : state.posts
    }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })

export default  connect(
    mapStateToProps,
    actions
)(NavBar);
