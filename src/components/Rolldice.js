import React, { Component } from 'react';
import Die from './Die';
import './Rolldice.css';

class Rolldice extends Component {

    static defaultProps = {
        sides : ['one','two','three','four','five','six']
    };

    constructor(props){
        super(props);
        this.state = {
            die1 : 'one',
            die2 : 'one'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        let face1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let face2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({
            die1 : face1,
            die2 : face2
        });
    }

    render(){
        return(
            <div className = "Rolldice">
                <Die face = {this.state.die1} />
                <Die face = {this.state.die2} />
                <button onClick = {this.handleClick}>Roll Dice!</button>
            </div>
        );
    }
}

export default Rolldice;