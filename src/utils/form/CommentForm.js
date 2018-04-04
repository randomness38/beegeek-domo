import React ,{ Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { validate } from './validate';
import {renderTextField } from "./TextInputField";

const style = {
  margin: 12,
};


class CommentForm extends Component {

  // componentDidMount () {
  //   const {doFetchAllPosts, doFetchCategories, doGetPost, idPost} = this.props;
  //   idPost && doGetPost(idPost);
  //   // doFetchAllPosts();
  //   doFetchCategories();
  // }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
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
  }
};


export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(reduxForm({
      form: 'postForm',
      validate,
    })(CommentForm)
  )
)

