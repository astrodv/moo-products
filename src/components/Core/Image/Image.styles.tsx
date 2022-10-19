import styled from "styled-components";
import Props from "./Image.types";

const ImageStyled = styled.img<Props>`
  max-width: 30rem;
  min-width: 15rem;
  width: 100%;
`;

export default ImageStyled;
