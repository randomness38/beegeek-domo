import React ,{ Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import {renderTextField } from "./TextInputField";
import {generateId, unixTimestamp} from "./formTools";

const style = {
  margin: 12,
};
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


class CommentForm extends Component {

  onSubmit = (values) => {
    const { idPost, doAddComment, doEditComment, doCloseEditing  } = this.props;
    const objectData = {
      id: values.id || generateId(),
      timestamp: values.timestamp || unixTimestamp(),
      parentId: idPost,
      author: values.author,
      body: values.body,
    };

    return (
      !values.id
        ? doAddComment(objectData)
        : doEditComment(values.id, objectData).then(()=> doCloseEditing(values.id))
    )

  };
  render() {
    const { handleSubmit, submitting, mode, pristine, reset } = this.props;

    return (

      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>{mode === 'edit' ? 'Edit Comment' : 'Create Comment'}</h3>
        <div>
          <Field
            name="author"
            component={renderTextField}
            label="author"
          />
        </div>
        <div>
          <Field
            name="body"
            component={renderTextField}
            label="body"
            multiLine={true}
            rows={2}
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
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(reduxForm({
      form: 'commentForm',
      validate,
    })(CommentForm)
  )
);
