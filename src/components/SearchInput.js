import React from 'react';
import PropType from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { description, name, inputType, testId, onChange, value } = this.props;
    return (
      <>
        <label htmlFor={ name }>{ description }</label>
        <input
          value={ value }
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

SearchInput.propTypes = {
  name: PropType.string.isRequired,
  value: PropType.string.isRequired,
  description: PropType.string.isRequired,
  inputType: PropType.string.isRequired,
  testId: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default SearchInput;
