import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import data from './data';

class App extends React.Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.validation = this.validation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.state = {
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cardTrunfo: false,
      cardRare: 'normal',
      cardImage: '',
      cardAttr3: '',
      cardAttr2: '',
      cardAttr1: '',
      cardDescription: '',
      cardName: '',
      myData: data,
    };
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    this.setState(() => ({
      cardRare: 'normal',
      cardImage: '',
      cardAttr3: 0,
      cardAttr2: 0,
      cardAttr1: 0,
      cardDescription: '',
      cardName: '',
    }));
  }

  inputHandler(event) {
    if (event.target.type === 'checkbox') {
      const { cardTrunfo } = this.state;
      const itsfalse = false;
      this.setState(() => ({
        cardTrunfo: cardTrunfo ? itsfalse : true,
      }));
    } else {
      this.setState(() => ({
        [event.target.name]: event.target.value,
      }), () => this.validation());
    }
  }

  validation() {
    const { cardImage,
      cardAttr3, cardAttr2, cardAttr1, cardDescription, cardName, cardRare } = this.state;
    const limit90 = 90;
    const limit210 = 210;
    const sumCard = parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3);
    if (cardName.length === 0 || cardDescription.length === 0 || cardAttr1 < 0
      || cardAttr1 > limit90 || cardAttr2 < 0 || cardAttr2 > limit90
      || cardAttr3 < 0 || cardAttr3 > limit90 || sumCard > limit210
      || cardImage.length === 0 || cardRare === 'selecione') {
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    } else {
      this.setState(() => ({
        isSaveButtonDisabled: false,
      }));
    }
  }

  render() {
    const { isSaveButtonDisabled, hasTrunfo, cardTrunfo, cardRare, cardImage,
      cardAttr3, cardAttr2, cardAttr1, cardDescription, cardName, myData } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.inputHandler }
          onSaveButtonClick={ this.onSaveButtonClick }
          theState={ this.state }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <div className="addedCards">
          { myData }
        </div>

      </div>
    );
  }
}

export default App;
