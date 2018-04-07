import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CommentForm, {onSubmit} from "./CommentForm";
import { validate } from './validate';


const CreateCommentForm = ({...props}) => {
  return (
    <CommentForm
      mode='create'
      {...props}
    />
  )
}

export default reduxForm({
  form: 'createCommentForm',
  // validate,
  // onSubmit
})(CreateCommentForm);
