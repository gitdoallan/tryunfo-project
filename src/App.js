import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.state = {
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cardTrunfo: true,
      cardRare: 'normal',
      cardImage: '',
      cardAttr3: 0,
      cardAttr2: 0,
      cardAttr1: 0,
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
      </div>
    );
  }
}

export default App;
