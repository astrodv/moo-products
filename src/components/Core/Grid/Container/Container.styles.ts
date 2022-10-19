import styled from "styled-components";
import Props from "./Container.types";

const ContainerStyled = styled.div<Props> `
  
  
  ${props => props.fluid && `
    min-width: 100%;
  `}

  ${props => !props.fluid && `
    max-width: 1280px;
    margin: auto;
  `}
  
  ${props => props.backgroundColor && `
    background: ${props.backgroundColor};
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
  
`;

export { ContainerStyled };
