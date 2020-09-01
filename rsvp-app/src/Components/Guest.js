import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';


function Guest(props) {
    return (
        <li
        className="responded">
        <GuestName
            isEditing={ props.isEditing }
            handleNameEdits={ e => props.setName(e.target.value)}
        >{ props.name }</GuestName>
        <label>
            <input 
            name="isConfirmed"
            type="checkbox" 
            checked={ props.isConfirmed } 
            onChange={ props.handlePropertyChange }  
            /> Confirmed
        </label>
        <button
            name="isEditing"
            onClick={ props.handlePropertyChange }
        >{ props.isEditing ? 'save' : 'edit'}</button>
        <button
            onClick={ props.removeGuest }
        >remove</button>
        </li>
    )
}

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handlePropertyChange: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired
}

export default Guest;