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

export const SigninContent = styled.div`
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
`

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

    }
`;

export const MailUtilsCamp = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ( max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
`;
