import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Die.css';

class Die extends Component {        
    render(){
        let diceclass = `dice-${this.props.face}`;
        return <FontAwesomeIcon icon={['fas', `${diceclass}`]} className = "die-icon"/>
    }
}

export default Die;