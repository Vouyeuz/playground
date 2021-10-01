import React, { Component } from 'react';
import PokeDex from '../../Containers/PokeDex/PokeDex';

export class PokeHand extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <PokeDex />
            </div>
        )
    }
}

export default PokeHand
