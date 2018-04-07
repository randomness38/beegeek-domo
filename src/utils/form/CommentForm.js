import React ,{ Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import { validate } from './validate';
import {renderTextField } from "./TextInputField";
import {generateId, unixTimestamp} from "./formTools";
import commentSubmit from "./commentSubmit";

const style = {
  margin: 12,
};

// export const onSubmit = (values, dispatch, props) => {
//   const { match: { params: { idPost } } } = props;
//   console.log('idPost',idPost);
//   const objectData = {
//     id: values.id || generateId(),
//     timestamp: values.timestamp || unixTimestamp(),
//     parentId: idPost,
//     author: values.author,
//     body: values.body,
//   };
//
//   return (
//     !values.id
//       ? dispatch(actions.doAddComment(objectData))
//       : dispatch(actions.doEditComment(values.id, objectData))
//         .then(()=> dispatch(actions.doCloseEditing(values.id)))
//   )
// };


class CommentForm extends Component {

  render() {
    const { handleSubmit, submitting, mode, pristine, reset } = this.props;

    return (

      <form onSubmit={handleSubmit}>
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
        {/*<div>*/}
          {/*<RaisedButton primary={true} type="submit" label="Submit" disabled={pristine || submitting} style={style} />*/}
          {/*<RaisedButton label="Reset"  disabled={pristine || submitting} onClick={reset} style={style} />*/}
        {/*</div>*/}
      </form>
    );
  }
}

export default reduxForm({
  form: 'commentForm',
  onSubmit: commentSubmit
})(CommentForm)

// const mapStateToProps = (state, ownProps) => {
//   const { idPost } = ownProps.match.params;
//   return {
//     idPost: idPost,
//     initialValues: ownProps.mode === 'edit' ? state.byCommentId[state.IsEditing.id] : "",
//   }
// };
//
// export default withRouter(
//   connect(
//     mapStateToProps,
//     actions
//   )(reduxForm({
//       form: 'commentForm',
//       // validate,
//       onSubmit,
//     })(CommentForm)
//   )
// );

// export default withRouter(connect(
//   mapStateToProps, actions
// )(CommentForm));

//
