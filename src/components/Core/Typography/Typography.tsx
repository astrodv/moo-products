import React from "react";
import Props from "./Typography.types";
import {
    TypographyStyledH1,
    TypographyStyledH2,
    TypographyStyledH3,
    TypographyStyledH4,
    TypographyStyledP
} from "./Typography.styles";


const TextH1 = (props: Props) => {
    const { children, weight, spacingBottom, color, size} = props
    return (
        <TypographyStyledH1 size={size} color={color}>{children}</TypographyStyledH1>
    )
}

const TextH2 = (props: Props) => {
    const { children, weight, spacingBottom, color, underlined, size} = props
    return (
        <TypographyStyledH2 size={size} color={color} weight={weight} spacingBottom={spacingBottom} underlined={underlined}>{children}</TypographyStyledH2>
    )
}

const TextH3 = (props: Props) => {
    const { children, weight, spacingBottom, color, underlined, size} = props
    return (
        <TypographyStyledH3 size={size} color={color} weight={weight} spacingBottom={spacingBottom} underlined={underlined}>{children}</TypographyStyledH3>
    )
}

const TextH4 = (props: Props) => {
    const { children, weight, spacingBottom, color, underlined, size} = props
    return (
        <TypographyStyledH4 size={size} color={color} weight={weight} spacingBottom={spacingBottom} underlined={underlined}>{children}</TypographyStyledH4>
    )
}

const TextP = (props: Props) => {
    const { children, weight, spacingBottom, color, underlined, size} = props
    return (
        <TypographyStyledP size={size} color={color} weight={weight} spacingBottom={spacingBottom} underlined={underlined}>{children}</TypographyStyledP>
    )
}

export {TextH1, TextH2, TextH3, TextH4, TextP}
