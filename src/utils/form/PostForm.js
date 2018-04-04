import React ,{ Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { validate } from './validate';

import {getVisiblePosts} from "../../reducers/index";
import {renderTextField, renderSelectField } from "./TextInputField";

const style = {
  margin: 12,
};


class PostForm extends Component {

  componentDidMount () {
    const {doFetchAllPosts, doFetchCategories, doGetPost, idPost} = this.props;
    idPost && doGetPost(idPost);
    // doFetchAllPosts();
    doFetchCategories();
  }


    render() {
      const { post, currentPost, categories, handleSubmit, pristine, reset, submitting } = this.props;
      // console.log('categories',categories);
      // console.log('post',post);
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="title"
              component={renderTextField}
              label="title"
              // initialValue={currentPost && currentPost.title}
            />
          </div>
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
            <Field
              name="category"
              component={renderSelectField}
              label="category"
              // initialValue={currentPost && currentPost.category}
            >
              {/* value 와 primaryText 차이가 뭐징 */}
              {categories.map(category => {
                return <MenuItem key={category} value={category} primaryText={category} />
              })}
            </Field>
          </div>


          <div>
            <RaisedButton primary={true} type="submit" label="Submit" disabled={pristine || submitting} style={style} />
            <RaisedButton label="Primary"  disabled={pristine || submitting} onClick={reset} style={style} />
          </div>
        </form>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { idPost } = ownProps.match.params;
    return {
      idPost: idPost,
      currentPost: state.byPostId,
      categories: state.categoryIds,
    }
};

// export default withRouter(
//   connect(
//     mapStateToProps,
//     actions
//   )(reduxForm({
//       form: 'postForm',
//       // validate,
//     })(PostForm)
//   )
// )
// export default reduxForm({
//   form: 'deckForm',
//   // validate,
// })(PostForm);


export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(reduxForm({
      form: 'postForm',
      validate,
    })(PostForm)
  )
)

