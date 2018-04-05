import React ,{ Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { Field, reduxForm } from 'redux-form'
import { doGetPost, doFetchCategories } from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { validate } from './validate';
import {renderTextField, renderSelectField } from "./TextInputField";

const style = {
  margin: 12,
};

class PostForm extends Component {

  componentDidMount () {
    const {getCategories, getPostById, idPost} = this.props;
    getPostById(idPost);
    getCategories();
  }

  // componentDidUpdate(prevProps) {
  //   const { idPost } = this.props;
  //   if (idPost !== prevProps.idPost ) {
  //     idPost(idPost);
  //   }
  // }

    render() {
      const { categories, handleSubmit, pristine, reset, submitting } = this.props;
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="title"
              component={renderTextField}
              label="title"
            />
          </div>
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
            <Field
              name="category"
              component={renderSelectField}
              label="category"
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

const mapDispatchToProps = dispatch => ({
  getPostById: postId => dispatch(doGetPost(postId)),
  getCategories: () => dispatch(doFetchCategories()),
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(reduxForm({
      form: 'postForm',
      validate,
      enableReinitialize: true,
    })(PostForm)
  )
)

