import React, {ReactNode} from "react";

interface Props {
    type?: string,
    id?: string,
    name?: string,
    value?: string,
    checked?: any,
    onChange?: any,
    onClick?: any,
    children?: React.ReactNode,
    defaultValue?: string,
}

export default Props
