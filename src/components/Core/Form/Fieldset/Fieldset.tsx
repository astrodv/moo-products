import FieldsetStyled from "./Fieldset.styles";
import Props from "./Fieldset.types";

const Fieldset = (props: Props) => {
    const {children} = props
    return (
        <FieldsetStyled>{children}</FieldsetStyled>
    )
}

export default Fieldset;
