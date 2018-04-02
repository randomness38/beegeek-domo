import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import * as actions from "../actions";
import FilterNaveLink from "./FilterNaveLink";
import uuid from 'uuid'

class NavBar extends Component {

    componentDidMount() {
        this.props.doFetchCategories();

    }

    render() {
        const { categories } = this.props;
        return (

            <div>
                <li>
                    <Link to={`/`}
                    >
                        Home
                    </Link>
                </li>

                {categories.map(categoryName => {
                    return (
                        <li key={categoryName}>
                            <FilterNaveLink filter={categoryName}>
                                {categoryName}
                            </FilterNaveLink>
                        </li>

                    )

                })}
                <li>
                    <Link to={`/add/post`}
                    >
                        New
                    </Link>
                </li>
            </div>
        )
    }
}

const mapStateToProps = ({ categoryIds }) => {
    return {
        categories : categoryIds.concat('all')
        // posts : getVisiblePosts(state, 'all'),
        // 오류나면 여기 id 진짜ㅣ있는지 확인해봐
        // comments: getCommentsByParentId(state, '8xf0y6ziyjabvozdd253nd')
    }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })



NavBar = withRouter(connect(
    mapStateToProps, actions
)(NavBar));

export default NavBar;
