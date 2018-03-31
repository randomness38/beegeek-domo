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

        const editedpost = {
                id: '8xf0y6ziyjabvozdd253nd',
                timestamp: 1467166872634,
                title: 'Udacity is the best place to learn React',
                body: 'Everyone says so after all.',
                author: 'thingtwo',
                category: 'react',
        }
        const editTest = {
            id: 'listIDs',
            timestamp: 1467166872634,
            title: '카테고리 변했니',
            body: '리덕스로 변했냐고오',
            author: '22멋져지길',
            category: 'redux',
        }
        const testPost = {
            id: 'listIDs 확인',
            timestamp: 1467166872634,
            title: '33잘됐으면 좋겠어 ',
            body: '너의 하루가',
            author: '멋져지길',
            category: 'udacity',
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
        // doFetchAllPosts()
        doFetchPostsByCategory(category)
        // doAddPost(testPost)
        // doEditPost('testEdit',editTest)
        doDeletePost('testEdit')
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
