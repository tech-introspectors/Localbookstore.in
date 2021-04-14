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
    font-size: 2rem;
  }
`;
const InputField = styled.div`
  margin-bottom: 1.6rem;

  input {
    width: 25vw;
    padding: 1.6rem;
    border: none;
    border-radius: ${borderRadius};
    outline: none;
    background: ${whiteShade};
    font-size: 1.8rem;
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
