import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 1100;
    top: 0;  
    background-color: #1565c0;
    box-shadow:  0px 1px 4px rgba(100, 116, 139, 0.12);
    align-items: center;
    justify-content: center;

    @media (min-width: 1200px) {
        display: none;
        
    }
`;

export const Topbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;

    button {
        height: 56px;
        width: 100%;
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
        color: #6B7280;
        cursor: pointer;
        margin-left: 8px;

        svg {
            width: 20px;
            height: 20px;
            color: #fff;
        }

    }
`;

export const HiddenButton = styled.div`
    display: none;

    @media (max-width: 1200px ) {
        display: block;
    }
`;

