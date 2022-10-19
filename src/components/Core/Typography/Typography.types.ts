import {ReactNode} from "react";

interface Props {
    children: ReactNode
    weight?: 'regular' | 'medium' | 'bold';
    spacingBottom?: number,
    color?: string,
    size?: number,
    underlined?: boolean,
}

export default Props
