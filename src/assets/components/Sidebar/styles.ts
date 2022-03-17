import styled from "styled-components";

export const ListStyle = styled.div`
    flex-direction: column;
    min-width: 240px;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: scroll;
    background-color: #5048E5;
    border-radius: 5px;

    hr {
        border-style: solid;
        border-color: #7972fd;
        border-bottom-width: thin;
        margin-top: 24px;
        margin-bottom: 24px;

    }

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const Toplist = styled.div `
    align-items: center;
    background-color: rgba(255, 255, 255, 0.04);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 8px;
    margin-top: 34px;
    margin-bottom: 34px;
    margin-left: 12px;
    margin-right: 12px;


    p, h6 {
        color: #fff;
    }
`;
