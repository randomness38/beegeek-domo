import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import PostForm from "../../utils/form/PostForm";
import { generateId, unixTimestamp } from '../../utils/form/formTools'


class ControlPostForm extends Component {

  handleSubmit = (values) => {
    const { doAddPost, doEditPost, idPost } = this.props;
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
        : doEditPost(idPost, objectData).then( ({ p }) => {
          this.props.history.push(`/${objectData.category}/${objectData.id}`);
        })
    )
  };

  render() {
    return (
      <div>
        <PostForm
          idPost={this.props.idPost}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { idPost } = ownProps.match.params;
  return {
    idPost: idPost
  }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default withRouter(connect(
  mapStateToProps,
  actions
)(ControlPostForm));

