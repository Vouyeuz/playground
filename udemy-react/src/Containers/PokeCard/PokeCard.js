import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 10% 0;
  width: 11rem;
  height: 17rem;
  box-shadow: 5px 10px #888;
  margin: .9em;
  background-color: hsl(240, 100%, 85%, 0.7);

  :hover {
    // background-color: hsl(240, 100%, 1%);
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;

  :hover {
    color: white;
  }
`;

const Name = styled(Text)`
  color: hsl(240, 100%, 50%, 0.8);
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Image = styled.img`
  width: 80%;

  :hover {
  }
`;

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

export class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div>
        <div className="PokeCard">
          <Card>
            <Name className="PokeCard-Name">{this.props.name}</Name>
            <Image src={imgSrc} alt="" className="PokeCard-Image" />
            <div className="PokeCard-Stats">
              <Text className="PokeCard-Stats-Type">
                Type: {this.props.type}
              </Text>
              <Text className="PokeCard-Stats-Exp">
                Exp Power: {this.props.base_experience}
              </Text>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default PokeCard;
