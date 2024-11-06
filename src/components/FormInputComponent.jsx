import { React } from "react";
import styled from 'styled-components';

export function FormInputComponent({ register, placeholder, errorMessage }) {
  return (
    <InputLabel>
      Введите {placeholder}
      <Input {...register} placeholder={placeholder}/>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputLabel>
  );
}

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  border: none;
  border-radius: 3px;
`

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 11px;
  color: #CB2A6F;
`