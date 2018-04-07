import React from 'react'
import { reduxForm } from 'redux-form'
import CommentForm from "./CommentForm";
import { validate } from './validate';
import commentSubmit from "./commentSubmit";
import RemoteCommentSubmit from "./RemoteCommentSubmit";


const CreateCommentForm = ({...props}) => {
  return (
    <div>
      <CommentForm
        mode='create'
        {...props}
      />
      <RemoteCommentSubmit mode='create' />
    </div>


  )
}

export default reduxForm({
  form: 'createCommentForm',
  validate,
  onSubmit: commentSubmit
})(CreateCommentForm);
