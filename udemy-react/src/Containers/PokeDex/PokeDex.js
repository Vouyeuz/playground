import React, { Component } from 'react';
import PokeCard from '../PokeCard/PokeCard';

export class PokeDex extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <PokeCard />
            </div>
        )
    }
}

export default PokeDex
