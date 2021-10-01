import React, { Component } from "react";

export class PokeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="PokeCard">
          <div className="PokeCard-Cointainer">
            <h3 className="PokeCard-Name">Pikachu</h3>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" alt="" className="PokeCard-Image" />
            <div className="PokeCard-Stats">
              <p className="PokeCard-Stats-Type">Type: Electricity</p>
              <p className="PokeCard-Stats-Exp">Exp Power: 112</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeCard;
