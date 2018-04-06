import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions';
import {getVisiblePosts} from "../../reducers/index";
import {PostItem} from "./PostItem";
import CommentList from "../../comment/components/CommentList";

class PostList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
      const { categoryName, posts} = this.props;
        if (categoryName !== prevProps.categoryName){
            this.fetchData();
        }
    }

    fetchData() {
        const { categoryName, doFetchAllPosts, doFetchPostsByCategory }  = this.props;
        categoryName === 'all' ? doFetchAllPosts() : doFetchPostsByCategory(categoryName)
    }

    render() {
        const { posts,categoryName, doVotePost, doDeletePost } = this.props;
        return (

            <div>
            <p>{categoryName}</p>
                {posts.map( post =>
                    <PostItem
                        key={post.id}
                        post={post}
                        onVote={doVotePost}
                        onRemove={doDeletePost}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { categoryName } = ownProps.match.params;
    return {
        //  getVisiblePosts 에서 action.filter 가 'all' 이면 어떻게 하기로 했지
        // 'all' === undefined 인 상태야 지금
        categoryName: categoryName,
        // Selector 는 dispatch 해서 state update 안하면 빈 데이터만 가져옴 !
        // 셀렉터 사용하기 전에 반드시 디스패치 먼저..!
        posts: getVisiblePosts(state, categoryName)
    }
}


PostList = withRouter(connect(
    mapStateToProps,
    actions
)(PostList));

export default PostList;
