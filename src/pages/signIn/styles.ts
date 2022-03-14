import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    max-width: 600px;
    padding: 0 24px 0 24px;
    margin: auto;
    margin-top: 120px;

    svg {
        margin-right: 5px;
    }

`;

export const SMediaCamp = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 23px;
    

    h4 {
        font-size: 34px;
        font-weight: 700;
    }
    p {
        font-size: 16px;
        margin-top: 3px;
        color: #c6c6c6;
    }
`;

export const MediaButtons = styled.div`
    display: flex;
    margin-top: 27px;
    justify-content: space-between;

    div {
        height: 48px; 
        flex: 1; 
        margin: 5px;
    }

    button {
        width: 100%;
        height: 48px;
        border-radius: 10px;
    }

    svg {
        margin-right: 13px;
    }
`;

export const Transition = styled.div`
    margin-top: 30px;
     p {
        text-align: center;
        font-size: 16px;
        margin-top: 3px;
        color: #c6c6c6;
    }
`;

export const MailCamps = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-size: 16px;
        margin-top: 15px;
        color: #c6c6c6;
    }

    form {
        margin-top: 32px;
        
        /* input {
            width: 100%;
            height: 52px;
            border-radius: 7px;
            border: 0.2px solid #dadada;
            margin-top: 15px;

            &:hover {
                border: 1px solid #000;
            }
        } */

        /* button {
            width: 100%;
            height: 52px;
            border-radius: 7px;
            border: 0.2px solid #dadada;
            margin-top: 22px;
            background-color: #5048E5;
            color: #fff;
            font-weight: 500;

            &:hover {
            background-color: ${shade(0.2, '#5048E5')};
            }
        } */

    }
`;