import React, { Component } from 'react'
import './dice.css'

class Dicepic extends Component {
    render() {
        return (
            <div className="dicepicdiv">
                <div className={`dice dice-${this.props.dice}`}></div>
            </div>
        )
    }
}

export default Dicepic
