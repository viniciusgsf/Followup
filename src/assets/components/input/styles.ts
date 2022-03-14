/* eslint-disable @typescript-eslint/no-unused-vars */
import { borderColor } from "polished";
import styled, {css} from "styled-components";

import Tooltip from '../Tooltip/index';


// interface ContainerProps {
//     isFocused: boolean;
//     isFilled: boolean;
//     isErrored: boolean;
// }
// <ContainerProps>

export const Container = styled.div `
        width: 100%;
        height: 52px;
        border-radius: 7px;
        border: 0.2px solid #dadada;
        margin-top: 15px;
        transition: border-color 0.2s;

        &:hover {
            border: 1px solid #000;
        }

    display: flex;
    align-items: center;

    & + div {
            margin-top: 8px;
        }


    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #000;

        &::placeholder {
            color: #666360;
        }

        
    }
    svg {
        margin-right: 23px;
    }
`;

export const Error = styled(Tooltip) `
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }
    span {
        background: #c53030;
        color: #FFF;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;