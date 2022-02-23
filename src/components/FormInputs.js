import React from 'react';
import PropType from 'prop-types';

class FormInputs extends React.Component {
  render() {
    const { description, name, inputType, onChange, testId } = this.props;
    return (
      <>
        <label htmlFor={ name }>{ description }</label>
        <input
          data-testid={ testId }
          type={ inputType }
          name={ name }
          id={ name }
          onChange={ onChange }
        />
      </>
    );
  }
}

FormInputs.propTypes = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  inputType: PropType.string.isRequired,
  testId: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default FormInputs;
