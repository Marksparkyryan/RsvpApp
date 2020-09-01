import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Filter from './Filter';
import GuestList from './GuestList';


class Main extends Component {

    render() {
        const numberInvited = this.props.getTotalInvited();
        const numberAttending = this.props.getAttendingGuests();
        const numberUnconfirmed = numberInvited - numberAttending;

        return (
            <div className="main">
            <div>
              <h2>Invitees</h2>
            <Filter 
                isFiltered={ this.props.isFiltered }
                toggleFilter={ this.props.toggleFilter }
            />
            </div>
            <Counter 
              numberInvited={ numberInvited }
              numberAttending={ numberAttending }
              numberUnconfirmed={ numberUnconfirmed }
            />
            <GuestList     
              guests={ this.props.guests } 
              togglePropertyAt={ this.props.togglePropertyAt }
              setNameAt={ this.props.setNameAt }
              isFiltered={ this.props.isFiltered }
              removeGuest={ this.props.removeGuest }
              guestName={ this.props.pendingGuest }
            />
          </div>
        )
    }
}

Main.propTypes = {
    getTotalInvited: PropTypes.func.isRequired,
    getAttendingGuests: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    guests: PropTypes.array.isRequired,
    togglePropertyAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    PendingGuest: PropTypes.string.isRequired
}

export default Main;