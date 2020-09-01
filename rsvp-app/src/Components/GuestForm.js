import React, { Component } from 'react';
import PropTypes from 'prop-types';


class GuestForm extends Component {

    handleSubmit = e => {
        e.preventDefault()
        this.props.pendingGuest ? this.props.addGuest() : console.log('emptyy')
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input 
                name="name"
                type="text"
                value={ this.props.pendingGuest } 
                onChange={ this.props.handleNameInput }
                placeholder="Invite Someone" 
                />
                <button type="submit" name="submit" value="submit">Submit</button>
            </form>
        )
    }
}

GuestForm.propTypes = {
    addGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
}

export default GuestForm;