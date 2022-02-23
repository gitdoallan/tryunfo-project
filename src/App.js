import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.saveCard = this.saveCard.bind(this);
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
    };
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
      }));
    }
  }

  saveCard() {
    console.log('saveCard');
  }

  render() {
    const { isSaveButtonDisabled, hasTrunfo, cardTrunfo, cardRare, cardImage,
      cardAttr3, cardAttr2, cardAttr1, cardDescription, cardName } = this.state;

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
          onSaveButtonClick={ this.saveCard }
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

      </div>
    );
  }
}

export default App;
