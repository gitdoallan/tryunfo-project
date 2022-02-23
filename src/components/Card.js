import React from 'react';
import PropType from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;

    return (
      <div className="card">
        <span data-testid="name-card">{cardName}</span>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <span data-testid="description-card">{cardDescription}</span>
        <span data-testid="attr1-card">{cardAttr1}</span>
        <span data-testid="attr2-card">{cardAttr2}</span>
        <span data-testid="attr3-card">{cardAttr3}</span>
        <span data-testid="rare-card">{cardRare}</span>
        {cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default Card;
