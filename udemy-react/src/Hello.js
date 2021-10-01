import React, { Component } from 'react'

export class Hello extends Component {
    render() {
        console.log(this.props);
        const p = this.props;

        return (
            <div>
                <p>Hai {p.siapa}, {p.dari} sayang {p.untuk}!</p>
            </div>
        )
    }
}

export default Hello
