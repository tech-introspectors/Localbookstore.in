import React from "react";
import styled from "styled-components";
import {
  borderRadius,
  primaryColor,
  whiteShade,
} from "../../../constants/constants";

const Row = styled.div`
  width: 100%;
`;
const Label = styled.div`
  margin-bottom: 0.5rem;

  label {
    color: ${primaryColor};
    font-weight: bold;
  }
`;
const InputField = styled.div`
  margin-bottom: 1rem;

  input {
    width: 20vw;
    padding: 1.1rem;
    border: none;
    border-radius: ${borderRadius};
    outline: none;
    background: ${whiteShade};
    font-size: 1rem;
  }
`;

const FormInputField = ({ labelName, inputType, placeholder }) => {
  return (
    <Row>
      <Label>
        <label>{labelName}</label>
      </Label>
      <InputField>
        <input type={inputType} placeholder={placeholder} />
      </InputField>
    </Row>
  );
};

export default FormInputField;
