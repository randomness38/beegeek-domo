import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import * as actions from "../actions";
import FilterNaveLink from "./FilterNaveLink";
import uuid from 'uuid'
import {category} from "../actions/schema";

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


                {categories.concat('all').map(category => {
                    return (
                        <li key={category.id || 'all'}>
                            <FilterNaveLink filter={category.path || 'all'}>
                                {category.name || 'all'}
                            </FilterNaveLink>
                        </li>

                    )

                })}
                <li>
                    <Link to='/add/post'
                    >
                        New
                    </Link>
                </li>



            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        // categories : categoryIds.concat('all')
        categories : state.categoryIds.map(id => state.byCategoryId[id])
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
