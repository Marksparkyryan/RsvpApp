import React, { Component } from 'react';

import Header from './Components/Header';
import Main from './Components/Main';

import { v4 as uuidv4 } from 'uuid';


class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    })
  }

  togglePropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (guest.id === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    });

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered })
  
  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () => this.state.guests.reduce(
    (total, guest) => guest.isConfirmed ? total + 1 : total, 0
  )
  
  handleNameInput = e => {
    this.setState({ pendingGuest: e.target.value })
  }

  addGuest = e => {

    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id: uuidv4()
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }

  removeGuest = (indexToRemove) => {
    this.setState({
      guests: this.state.guests.filter( guest => guest.id !== indexToRemove)
    })
  }
  
  render() {

    return (
      <div className="App">
        <Header 
          addGuest={ this.addGuest }
          pendingGuest={ this.state.pendingGuest }
          handleNameInput={ this.handleNameInput }
        />
        <Main 
          isFiltered={ this.state.isFiltered }
          toggleFilter={ this.toggleFilter }
          getTotalInvited={ this.getTotalInvited }
          getAttendingGuests={ this.getAttendingGuests }
          guests={ this.state.guests }
          togglePropertyAt={ this.togglePropertyAt }
          setNameAt={ this.setNameAt }
          removeGuest={ this.removeGuest }
          pendingGuest={ this.state.pendingGuest }
        />  
      </div>
    );
  }
}

export default App;
