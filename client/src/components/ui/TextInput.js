import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border: 2px #b50000 solid;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  padding: 10px 10px;
  width: 100%;
`;

export default function TextInput({ name, type, label, placeholder, value, onChange }) {
  return (
    <div>
      <label>
        <span>{label}</span>
        <InputText name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </label>
    </div>
  );
}
