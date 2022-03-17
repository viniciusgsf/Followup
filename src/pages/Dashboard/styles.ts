import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
    padding-top: 64px;

    @media (min-width: 1200px) {
        padding-left: 280px;
    }
`;

export const SubContainer = styled.div `
    padding-top: 64px;
    padding-bottom: 64px;
    flex-grow: 1;
`;

export const Content = styled.div `
    padding-top: 64px;
    padding-bottom: 64px;
    flex-grow: 1;
`;

export const GridContainer = styled.div `
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;

    @media (max-width: 600px) {
        padding-left: 48px;
        padding-right: 24px;
    }
`;

export const GridItems = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    margin-top: -24px;
    width: 100%;
    margin-left: -24px; 
    padding-right: -24px; 
    height: 300px;

`;

export const SmallGrid = styled.div `
    display: flex;
    height: 178px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    flex-basis: 25%;
    max-width: 25%;

    div {
        border-radius: 8px;
        box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
        overflow: hidden;
    }

    @media (max-width: 600px) {
        flex-basis: 100%;
        max-width: 100%;
    }
    
`;

export const BigGrid = styled.div `
    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    flex-basis: 75%;
    max-width: 75%;

    div {
        border-radius: 8px;
        box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
        overflow: hidden;
    }

    @media (max-width: 600px) {
        flex-basis: 100%;
        max-width: 100%;
    }
    
`;

export const SideGrid = styled.div `
    display: flex;
    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    flex-basis: 25%;
    max-width: 25%;

    div {
        border-radius: 8px;
        box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
        overflow: hidden;
    }

    @media (max-width: 600px) {
        flex-basis: 100%;
        max-width: 100%;
    }
    
`;