import styled from "styled-components";
import Props from "./Label.types";

const LabelStyled = styled.label<Props>`
  border: 2px solid lightgrey;
  padding: 15px;
  max-width: 220px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  

  ${props => props.checked && `
    border: 2px solid #107c5d;
  `}
  
  //border: 2px solid #107c5d;
`;

export default LabelStyled;
