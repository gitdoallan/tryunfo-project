import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }

  inputHandler() {
    console.log('hello input Handler');
  }

  saveCard() {
    console.log('saveCard');
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare="normal"
          cardTrunfo="false"
          hasTrunfo="false"
          isSaveButtonDisabled="true"
          onInputChange={ this.inputHandler }
          onSaveButtonClick={ this.saveCard }
        />
      </div>
    );
  }
}

export default App;
