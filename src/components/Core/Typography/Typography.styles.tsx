import styled from "styled-components";
import Props from "./Typography.types";

import themeStyles from "../../../data/theme.js"

const hlsaFormatter = (source : any) => {
  return (
     'hsla( '+(source.hue)+ ' , '+(source.sat)+ '% ,' +(source.light)+ '%)'
  )
}


const TypographyStyledH1 = styled.h1<Props> `
    font-size: 4rem;
    color: ${props => props.color || hlsaFormatter(themeStyles.typography.h1)};
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;

  ${props => props.size && `
    font-size: ${props.size}rem;
  `}
`

const TypographyStyledH2 = styled.h2<Props> `
    font-size: 3rem;
    color: ${props => props.color || hlsaFormatter(themeStyles.typography.body1)};
    font-family: 'Roboto', sans-serif;
    margin-top: 0;
    margin-bottom: 1.7rem;

  ${props => props.underlined && `
    text-decoration: underline;
  `}

  ${props => props.size && `
    font-size: ${props.size}rem;
  `}

  
  
  
`

const TypographyStyledH3 = styled.h3<Props> `
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: ${props => props.color || hlsaFormatter(themeStyles.typography.body1)};
    font-family: 'Roboto', sans-serif;

  ${props => props.underlined && `
    text-decoration: underline;
  `}

  ${props => props.size && `
    font-size: ${props.size}rem;
  `}
`

const TypographyStyledH4 = styled.h4<Props> `
    font-size: 17px;
    color: ${props => props.color || hlsaFormatter(themeStyles.typography.body1)};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem
  

  ${props => props.underlined && `
    text-decoration: underline;
  `}

  ${props => props.size && `
    font-size: ${props.size}rem;
  `}
`



const TypographyStyledP = styled.p<Props> `
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.color || hlsaFormatter(themeStyles.typography.body1)};
    font-weight: 400;

  ${props => props.underlined && `
    text-decoration: underline;
  `}

  ${props => props.size && `
    font-size: ${props.size}rem;
  `}
`


export {TypographyStyledH1, TypographyStyledH2, TypographyStyledH3, TypographyStyledH4, TypographyStyledP};
