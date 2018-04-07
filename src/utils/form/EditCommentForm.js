import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CommentForm, {onSubmit} from "./CommentForm";
import { validate } from './validate';



const EditCommentForm = ({...props}) => {
  return (
    <CommentForm
      mode='edit'
      {...props}
    />
  )
};

export default reduxForm({
  form: 'editCommentForm',
  // validate,
  // onSubmit
})(EditCommentForm);

