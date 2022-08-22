import React from "react";
import Form from 'react-bootstrap/Form';

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <Form.Group controlId={name} className="mb-3"> 
      <Form.Label>{labelText || name}</Form.Label>
      <Form.Select
        className="formRowColor"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default FormRowSelect;
