import React from "react";

import RowStyled from "./Row.styles";
import Props from "./Row.types"

const Row = (props: Props) => {
    const { children, marginTop, marginBottom, paddingTop, paddingBottom, textAlign, align} = props;

    return (
        <RowStyled textAlign={textAlign} align={align} marginTop={marginTop} marginBottom={marginBottom} paddingTop={paddingTop} paddingBottom={paddingBottom}>{children}</RowStyled>
    )
}

export default Row;
