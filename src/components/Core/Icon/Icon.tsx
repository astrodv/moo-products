import IconStyled from "./Icon.styles";
import Props from "./Icon.types";

const Icon = (props: Props) => {
    const {
        children, size, name, color
    } = props;
    return (
        <IconStyled size={size} name={name} color={color}>{children}</IconStyled>
    )
}
