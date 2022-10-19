import styled from "styled-components";
import Props from "./Link.types";

const LinkStyled = styled.a<Props> `
  text-decoration: underline;
  cursor: pointer;
  color: #111144;
`

export default LinkStyled;
