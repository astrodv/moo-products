import styled from "styled-components";
import type Props from "./Col.types";

const ColStyled = styled.div<Props>`
  flex: ${(props) => props.size};
  
  margin-left: 1.1rem;
  margin-right: 1.1rem;

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
  
}
  
    `;



export default ColStyled
