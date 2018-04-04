import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import PostForm from "../../utils/form/PostForm";
import { generateId, unixTimestamp } from '../../utils/form/formTools'


class AddPost extends Component {

    componentDidMount() {
        this.props.doFetchCategories();

    }

    handleSubmit = (values, dispatch, props) => {
      const { doAddPost, doEditPost, idPost, reset } = this.props;
      const objectData = {
          id: values.id || generateId(),
          timestamp: values.timestamp || unixTimestamp(),
          title: values.title,
          body: values.body,
          author: values.author,
          category: values.category
      };

      return (
            !idPost
              ? doAddPost(objectData).then( ({ p }) => {
                this.props.history.push(`/${objectData.category}/${objectData.id}`);
              })
              : doEditPost(objectData)
      )
    };

    render() {
        return (
            <div>
                <PostForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {params} = ownProps.match;
    return {
        state
    }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


AddPost = withRouter(connect(
  mapStateToProps,
  actions
)(AddPost));

export default AddPost;
