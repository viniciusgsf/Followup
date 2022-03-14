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

    form {
       margin-top: 51px;
       margin-bottom: 51px;

        p {
            font-size: 16px;
            margin-top: 15px;
            color: #c6c6c6;
        }

       div {
           margin-top: 15px;
       }
    }

`;

export const Terms = styled.div`
    display: flex;
    align-items: center;
    margin-left: -10px;
`;
