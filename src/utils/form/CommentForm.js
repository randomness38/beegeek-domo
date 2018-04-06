import React ,{ Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import { validate } from './validate';
import {renderTextField } from "./TextInputField";
import {generateId, unixTimestamp} from "./formTools";

const style = {
  margin: 12,
};

const onSubmit = (values, dispatch, props) => {
  const { match: { params: { idPost } } } = props;
  const objectData = {
    id: values.id || generateId(),
    timestamp: values.timestamp || unixTimestamp(),
    parentId: idPost,
    author: values.author,
    body: values.body,
  };

  return (
    !values.id
      ? dispatch(actions.doAddComment(objectData))
      : dispatch(actions.doEditComment(values.id, objectData))
    // action creator 만들어보자고
        // .then(()=> this.props.onEditing)
  )
};


class CommentForm extends Component {

  // componentDidMount () {
  //   const { doFetchComment, commentId } = this.props;
  //   commentId && doFetchComment(commentId);
  // }


  render() {
    const { handleSubmit, submitting, pristine, reset,onEditing } = this.props;
    // console.log('categories',categories);
    // console.log('post',post);
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="author"
            component={renderTextField}
            label="author"
            // initialValue={currentPost && currentPost.author}
          />
        </div>
        <div>
          <Field
            name="body"
            component={renderTextField}
            label="body"
            multiLine={true}
            rows={2}
            // initialValue={currentPost && currentPost.body}
          />
        </div>
        <div>
          <RaisedButton primary={true} type="submit" label="Submit" disabled={pristine || submitting} style={style} />
          <RaisedButton label="Reset"  disabled={pristine || submitting} onClick={reset} style={style} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { idPost } = ownProps.match.params;
  return {
    idPost: idPost,
    initialValues: state.byCommentId[ownProps.commentId],

  }
};


export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(reduxForm({
      form: 'commentForm',
      validate,
      onSubmit,
      enableReinitialize: true,
    })(CommentForm)
  )
)

