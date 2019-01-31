import React from 'react';

const AddInput = props => (
  <input
        value={props.newItemValue}
        type="text"
        name="newItem"
        placeholder="To buy ..."
        onChange={props.handleOnChange}
    />
);

export default AddInput;