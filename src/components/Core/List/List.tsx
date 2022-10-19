import { PropsListParent, PropsList } from "./List.types";
import React from "react";
import {ListParentStyled, ListStyled} from "./List.styles";

const ListParent = (props: PropsListParent) => {
    const {
        children, columns
    } = props;
    return (
        <ListParentStyled columns={columns}>{children}</ListParentStyled>
    )
}

const List = (props: PropsList) => {
    const {
        children, size, color
    } = props;
    return (
        <ListStyled size={size} color={color}>{children}</ListStyled>
    )
}


export { ListParent, List }
