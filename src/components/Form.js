import React from 'react';
import PropType from 'prop-types';
import FormInputs from './FormInputs';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    console.log(hasTrunfo);

    return (
      <div>
        <FormInputs
          value={ cardName }
          description="Nome da carta"
          name="name"
          inputType="text"
          testId="name-input"
          onChange={ onInputChange }
        />
        <br />
        <br />
        <FormInputs
          value={ cardDescription }
          description="Descrição da carta"
          name="description"
          inputType="textarea"
          testId="description-input"
          onChange={ onInputChange }
        />
        <br />
        <br />
        <FormInputs
          value={ cardAttr1 }
          description="Atributo 1"
          name="attr1"
          inputType="number"
          testId="attr1-input"
          onChange={ onInputChange }
        />
        <br />
        <br />
        <FormInputs
          value={ cardAttr2 }
          description="Atributo 2"
          name="attr2"
          inputType="number"
          testId="attr2-input"
          onChange={ onInputChange }
        />
        <br />
        <br />
        <FormInputs
          value={ cardAttr3 }
          description="Atributo 3"
          name="attr3"
          inputType="number"
          testId="attr3-input"
          onChange={ onInputChange }
        />
        <br />
        <br />
        <FormInputs
          value={ cardImage }
          description="Imagem da carta (URL)"
          name="image"
          inputType="text"
          testId="image-input"
          onChange={ onInputChange }
        />
        <br />
        <br />
        <label htmlFor="selected">
          Select
          <select
            value={ cardRare }
            data-testid="rare-input"
            name="selected"
            id="selected"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="checkboxInput">
          CheckBox:
          <input
            value={ cardTrunfo }
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            type="checkbox"
            id="checkboxInput"
            name="checked"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.number.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
