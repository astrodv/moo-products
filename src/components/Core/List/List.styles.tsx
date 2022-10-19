import styled from "styled-components";
import {PropsList, PropsListParent} from  "./List.types";


const ListParentStyled = styled.ul<PropsListParent>`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    columns: ${props => props.columns || 1};
    padding-left: 0;
    list-style-type: none;
`;

const ListStyled = styled.li<PropsList>`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
`;


export { ListParentStyled, ListStyled};
