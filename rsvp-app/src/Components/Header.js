import React from 'react';
import PropTypes from 'prop-types';

import GuestForm from './GuestForm';


function Header(props) {
return (
    <header>
    <h1>RSVP</h1>
    <p>A Treehouse App</p>
    <GuestForm 
        addGuest={ props.addGuest }
        pendingGuest={ props.pendingGuest }
        handleNameInput={ props.handleNameInput }
    />
  </header>
)
}

Header.propTypes = {
    addGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
}

export default Header;