import {ContainerStyled} from "./Container.styles";
import Props from "./Container.types";

const Container = (props: Props) => {
    const { children, fluid, backgroundColor, paddingTop, paddingBottom, marginTop, marginBottom} = props;

    return (
        <ContainerStyled fluid={fluid} marginTop={marginTop} marginBottom={marginBottom} paddingTop={paddingTop} paddingBottom={paddingBottom} backgroundColor={backgroundColor}>
            {children}
        </ContainerStyled>
    )
}

export default Container;
