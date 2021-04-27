import styled from "styled-components";

// ** using this component we can provide space between any thing
export const Spacer = styled.div`
  width: ${({ width }) => (width ? width : 0)}rem;
  height: ${({ height }) => (height ? height : 0)}rem;

  @media screen and (max-width: 768px) {
    width: ${({ width }) => (width ? width / 2 : 0)}rem;
    height: ${({ height }) => (height ? height / 2 : 0)}rem;
  }
`;

// **  Here only reuseable style should be coded not other than that
