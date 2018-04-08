import React from 'react'
import { reduxForm } from 'redux-form'
import CommentForm from "./CommentForm";

function validate(values){
  const errors = {}
  const fields = ['author','body']

  fields.map( field => {
    if(!values[field]) {
      errors[field]=`Enter a ${field} `
    }

    return field
  })

  return errors
}

const CreateCommentForm = ({...props}) => {
  return (
    <div>
      <CommentForm
        mode='create'
        {...props}
      />
    </div>


  )
};

export default reduxForm({
  form: 'createCommentForm',
  asyncBlurFields: [],
  validate,
})(CreateCommentForm);
