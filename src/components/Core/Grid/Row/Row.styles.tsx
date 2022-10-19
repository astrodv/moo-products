import styled from "styled-components";
import Props from "./Row.types";

const RowStyled = styled.div<Props> `
  display: flex;
  
  padding-left: 3rem;
  padding-right: 3rem;

  ${props => props.align && `
    align-items: ${props.align};
  `}

  ${props => props.paddingBottom && `
    padding-bottom: ${props.paddingBottom}rem;
  `}

  ${props => props.paddingTop && `
    padding-top: ${props.paddingTop}rem;
  `}

  ${props => props.marginBottom && `
    margin-bottom: ${props.marginBottom}rem;
  `}

  ${props => props.marginTop && `
    margin-top: ${props.marginTop}rem;
  `}

  ${props => props.textAlign && `
    text-align: ${props.textAlign};
  `}

  @media (max-width: 768px) {
  flex-direction: column;
  
`;



export default RowStyled;
