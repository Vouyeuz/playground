import React, { Component } from 'react';
import PokeHand from '../PokeHand/PokeHand';

export class PokeGame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <PokeHand />
                {/* <PokeHand /> */}
            </div>
        )
    }
}

export default PokeGame
