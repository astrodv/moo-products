import ImageStyled from "./Image.styles";
import Props from "./Image.types";

const Image = (props: Props) => {
    const {
        size, src, alt
    } = props;
    return (
        <ImageStyled size={size} src={src} alt={alt}/>
    )
}

export default Image;
