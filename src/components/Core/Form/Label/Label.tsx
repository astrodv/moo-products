import LabelStyled from "./Label.styles";
import Props from "./Label.types";

const Label = (props: Props) => {
    const {children} = props
    return (
        <LabelStyled>{children}</LabelStyled>
    )
}

export default Label;
