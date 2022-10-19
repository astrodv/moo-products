import styled from "styled-components";
import Props from "./Separator.types";

const SeparatorStyled = styled.div<Props>`
    margin-top: ${props => props.spacingTop || 0.5}rem;
    margin-bottom: ${props => props.spacingBottom || 0.5}rem;
    border-bottom: 2px solid ${props => props.color || "white"};
`

export default SeparatorStyled;
