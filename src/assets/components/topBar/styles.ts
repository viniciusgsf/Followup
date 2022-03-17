import styled from "styled-components";


export const Container = styled.header`
    left: 280px;
    width: calc(100% - 280px);
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1100;
    top: 0;
    right: 0;   
    background-color: #fff;
    box-shadow:  0px 1px 4px rgba(100, 116, 139, 0.12);

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        left: auto;
        width: 100%;
    }
`;

export const Topbar = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    left: 0;
    padding-left: 16px;
    padding-right: 16px;

    button {
        height: 56px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        outline: 0;
        border: 0;
        margin: 0;
        background-color: transparent;
        padding: 8px;
        border-radius: 50%;
        overflow: visible;
        color: #6B7280;
        cursor: pointer;
        margin-left: 8px;

        svg {
            width: 20px;
            height: 20px;
        }

    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        height: 40px;
        width: 40px;
       
        border-radius: 50%;
        display: block;
        margin-left: 16px;
        margin-right: 8px;

        img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
       
    }
`;

export const SearchButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HiddenButton = styled.div`
    display: none;

    @media (max-width: 1200px ) {
        display: block;
    }
`;

