import React from 'react';
import PropTypes from 'prop-types';


function Filter(props) {
    return (
        <label>
        <input 
            type="checkbox" 
            checked={ props.isFiltered }
            onChange={ props.toggleFilter }
        /> Hide those who haven't responded
      </label>
    )
}

Filter.propTypes = {
    isFiltered: PropTypes.bool.isRequired,
    toggleFilter: PropTypes.func.isRequired
}

export default Filter;