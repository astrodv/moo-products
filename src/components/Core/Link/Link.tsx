import LinkStyled from "./Link.styles";
import Props from "./Link.types";

const Link = (props: Props) => {
    const {
        children, href, ariaLabel
    } = props
    return (
        <LinkStyled aria-label={ariaLabel} href='#'>{children}</LinkStyled>
    )
}

export default Link;
