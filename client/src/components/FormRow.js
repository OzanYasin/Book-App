import React from 'react';
import Form from 'react-bootstrap/Form';


const FormRow = ({ type, name, value, handleChange, labelText, min}) => {
  return (
    <Form.Group controlId={name} className="mb-3">
      <Form.Label>
        {labelText || name}
      </Form.Label>
      <Form.Control type={type} name={name} value={value} onChange={handleChange} min={min} className="formRowColor"/>
    </Form.Group>
  );
};

export default FormRow;
