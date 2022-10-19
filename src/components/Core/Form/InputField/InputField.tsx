import React from "react";

import InputFieldStyled from "./InputField.styles";
import LabelStyled from "../Label/Label.styles";
import type Props from "./InputField.types";


const InputField = (props: Props) => {
    const {type, name, checked, value, onChange, onClick, defaultValue } = props
    return (
        <React.Fragment>
            <InputFieldStyled checked={checked} id={value} onChange={onChange} type={type} name={name} value={value} defaultValue={defaultValue} onClick={onClick}/>
            <LabelStyled checked={checked} htmlFor={value}>{value}</LabelStyled>
        </React.Fragment>
    );
}

export default InputField;
