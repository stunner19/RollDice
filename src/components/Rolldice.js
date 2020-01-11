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
            die2 : 'one',
            rolling: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        let face1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let face2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({
            die1 : face1,
            die2 : face2,
            rolling : true
        });

        setTimeout(() => {
            this.setState({
                rolling : false
            })
        },1000);
    }

    render(){
        return(
            <div className = "Rolldice">
                <div className = "Rolldice-container">
                    <Die face = {this.state.die1} rolling = {this.state.rolling} />
                    <Die face = {this.state.die2} rolling = {this.state.rolling} />
                </div>
                <button onClick = {this.handleClick} disabled = {this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default Rolldice;