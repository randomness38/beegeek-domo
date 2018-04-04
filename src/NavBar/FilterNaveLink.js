import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterNaveLink = ({
                            filter,
                            children
                        }) => (
    <NavLink
        className='nav-link'
        exact to={`/${filter === 'all' ? 'all' : filter}`}
        // activeStyle={{
        //      textDecoration: 'none',
        //  }}
    >
        {children}
    </NavLink>
);

export default FilterNaveLink;
