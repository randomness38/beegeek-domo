import React ,{ Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { Field, reduxForm } from 'redux-form'
// import { doGetPost, doFetchCategories } from '../../actions'
import {
  doGetPost,
  doFetchCategories,
  doAddPost,
  doEditPost
} from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { validate } from './validate';
import {renderTextField, renderSelectField } from "./TextInputField";
import {generateId, unixTimestamp} from "./formTools";


const style = {
  margin: 12,
};



class PostForm extends Component {

  componentDidMount() {
    const {doGetPost, doFetchCategories,reset, idPost} = this.props;
    doFetchCategories();
    idPost ? doGetPost(idPost) : reset()

    // form clear 어떻게 하냐?
  }



    render() {
      const { categories, handleSubmit, pristine, reset, submitting } = this.props;
      return (
        <div>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              autoFocus
              name="title"
              component={renderTextField}
              label="title"
              id="title"
            />
          </div>
          <div>
            <Field
              name="author"
              component={renderTextField}
              label="author"
              id="author"
            />
          </div>
          <div>
            <Field
              name="body"
              label="body"
              component={renderTextField}
              multiLine={true}
              id="body"
            />
          </div>
          <div>
            <Field
              name="category"
              component={renderSelectField}
              label="category"
              id="category"
            >
              {categories.map(category => {
                return <MenuItem key={category} value={category} primaryText={category} />
              })}
            </Field>
          </div>


          <div>
            <RaisedButton primary={true} type="submit" label="Submit" disabled={pristine || submitting} style={style} />
            <RaisedButton label="Reset"  disabled={pristine || submitting} onClick={reset} style={style} />
          </div>
        </form>
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { idPost } = ownProps.match.params;
    return {
      idPost: idPost,
      categories: state.categoryIds,
      initialValues: state.byPostId[idPost],
    }
};

// const mapDispatchToProps = dispatch => ({
//   getPostById: postId => dispatch(doGetPost(postId)),
//   getCategories: () => dispatch(doFetchCategories()),
// });

export default withRouter(
  connect(
    mapStateToProps,
    {
      doGetPost,
      doFetchCategories,
      doAddPost,
      doEditPost
    }
  )(reduxForm({
      form: 'postForm',
      enableReinitialize: true,
      validate,
    })(PostForm)
  )
)
