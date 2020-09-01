import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';


function GuestList(props) {

    return (
        <ul>
        <PendingGuest name={ props.guestName } />
        {props.guests
            .filter(guest => !props.isFiltered || guest.isConfirmed )
            .map(guest => 
                <Guest 
                    key={ guest.id }
                    name={ guest.name }
                    isConfirmed={ guest.isConfirmed }
                    isEditing={ guest.isEditing }
                    handlePropertyChange={ (e) => props.togglePropertyAt(e.target.name, guest.id)}
                    setName={ text => props.setNameAt(text, guest.id) }
                    removeGuest={ () => props.removeGuest(guest.id) }
                />
            )}
      </ul>
    )
}

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    togglePropertyAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuest: PropTypes.func.isRequired,
    guestName: PropTypes.string.isRequired
}

export default GuestList