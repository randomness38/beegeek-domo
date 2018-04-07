import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import * as actions from '../../actions'
import CommentForm from "./CommentForm";
import { validate } from './validate';
import commentSubmit from "./commentSubmit";
import RemoteCommentSubmit from "./RemoteCommentSubmit";




const EditCommentForm = ({...props}) => {
  return (
    <div>
      <CommentForm
        mode='edit'
        {...props}
      />
      <RemoteCommentSubmit mode='edit' />
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  const { idPost } = ownProps.match.params;
  return {
    idPost: idPost,
    initialValues: state.byCommentId[state.IsEditing.id]
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(reduxForm({
      form: 'editCommentForm',
      validate,
      onSubmit: commentSubmit
    })(EditCommentForm)
  )
);

//
// export default reduxForm({
//   form: 'editCommentForm',
//   // validate,
//   // onSubmit
// })(EditCommentForm);

