import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../actions/index';
import {generateId,unixTimestamp} from "./formTools";



class commentSubmit extends Component   {
  render(){
    const { values, idPost, doAddComment, doEditComment, doCloseEditing } = this.props;
    console.log(values);
    const objectData = {
        id: values.id || generateId(),
        timestamp: values.timestamp || unixTimestamp(),
        parentId: idPost,
        author: values.author,
        body: values.body,
      };
    return
    // return(
    // !values.id
    //     ? doAddComment(objectData)
    //     : doEditComment(values.id, objectData)
    //       .then(()=> doCloseEditing(values.id))
    // )
  };
}

const mapStateToProps = (state, ownProps) => {
  const {idPost} = ownProps.match.params;
  return {
    idPost: idPost,
  }
};

export default withRouter(connect(
  mapStateToProps,
  actions
)(commentSubmit));

