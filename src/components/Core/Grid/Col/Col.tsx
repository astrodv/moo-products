import React from "react";

import ColStyled from "./Col.styles";
import type Props from "./Col.types";

const Col = (props : Props) => {
    const {
        size, children, marginTop, marginBottom, paddingTop, paddingBottom
    } = props;
    return (
        <ColStyled size={size} marginTop={marginTop} marginBottom={marginBottom} paddingTop={paddingTop} paddingBottom={paddingBottom}>
            {children}
        </ColStyled>
    );
};

export default Col;
