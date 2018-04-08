import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import * as actions from '../../actions'
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


const EditCommentForm = ({...props}) => {
  return (
    <div>
      <CommentForm
        mode='edit'
        {...props}

      />
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
      //asyncValidate error on blur *bug
      asyncBlurFields: [],
      validate,
    })(EditCommentForm)
  )
);

//
// export default reduxForm({
//   form: 'editCommentForm',
//   // validate,
//   // onSubmit
// })(EditCommentForm);

