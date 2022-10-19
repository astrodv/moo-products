import SeparatorStyled from "./Separator.styles";
import type Props from "./Separator.types";

const HR = (props: Props) => {
    const {
        spacingBottom, spacingTop, color
    } = props;
    return (
        <SeparatorStyled spacingTop={spacingTop} spacingBottom={spacingBottom} color={color}/>
    );
};

export default HR;
