import {ReactNode} from "react";

interface PropsListParent {
    children: ReactNode,
    columns?: number
}

interface PropsList {
    children: ReactNode,
    size?: string,
    color?: string,
}

export type {PropsList, PropsListParent};
