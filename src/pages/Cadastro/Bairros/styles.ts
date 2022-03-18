import styled from "styled-components";
 
export const Container = styled.div `
    display: flex;
    flex: 1 1 auto;
    max-width: 100%;
    margin-top: 64px;
    

    @media (min-width: 1200px) {
        padding-left: 280px;
    }
`;
    
export const SubContainer = styled.div `
    display: flex; 
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
`;

export const Content = styled.div `
    flex-grow: 1;
    padding-top: 64px;
    padding-bottom: 64px;
`;

export const MainContent = styled.div `
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-left: auto;
    display: block; 

    @media (min-width: 600px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const Bplan = styled.div`
    
`;
export const Topside = styled.div`
    display: flex;
    align-items: center;

    h4 {
        font-weight: 700;
        font-size: 2rem;
        margin: 8px;
    }

`;
export const BottomSide = styled.div`
    margin-top: 24px;

    @media (max-width: 600px) {
            flex-direction: column;
        }
`;

export const BottomContainer = styled.div`
    background-color: #FFF;
    color: #121828;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
    overflow: hidden;


`;

export const BottomInputs = styled.div `
    :last-child {
        padding-bottom: 32px
    }
    padding: 32px 24px;

    label {
        display: flex;
        flex-direction: row;
        align-items: center;

        button {
            height: 47px;
            margin-top: 7px;

    
        }

        @media (max-width: 600px) {
            flex-direction: column;
        }
    }
`;

export const ButtonDiv = styled.div`
    margin-right: 10px;
    width: 100%;
`;




export const BplanContent = styled.div `
    margin-top: 24px;
`;

export const BplanContentContainer = styled.div `
    background-color: #FFF;
    color: #121828;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
    overflow: hidden;
    
`;

export const BplanInfo = styled.div `
    box-sizing: border-box;
    margin: 0;
`;

export const ScrollbarBplan = styled.div `
    @media ( max-width: 600px) {
        overflow-x: scroll;
    }

    @media (max-width: 1200px) {
        overflow-x: scroll;
    }
`;

export const BplanItens = styled.div`
    min-width: 1050px;

    table {
        display: table;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        thead {
            display: table-header-group;
            background-color: #F3F4F6;
            border-bottom: none;

            tr {
                color: inherit;
                display: table-row;
                vertical-align: middle;
                outline: 0;

                th {
                    border-bottom: none;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 1;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
            }
        }
    }  
`;

export const BplanCheckbox = styled.th`
    border-bottom: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.5px;
    text-transform: uppercase;font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    display: table-cell;
    vertical-align: inherit;
    text-align: left;
    padding: 0 0 0 4px;
    width: 48px;

    span {
            display: inline-flex;
            justify-content: center;
            align-self: flex-start;
            box-sizing: border-box;
            background-color: transparent;
            outline: currentcolor none 0px;
                border: 0px none;
            margin: 0px;
            cursor: pointer;
            user-select: none;
            vertical-align: middle;
            appearance: none;
            text-decoration: none;
            padding: 9px;
            color: rgb(101, 116, 139);
        }
`;

export const BplanBody = styled.tbody `
    display: table-header-group;

    thead {
        background-color: #fff;
    }

    th {
        max-width: 600px;
        font-weight: 400;
        font-size: 15px;
        
    }

`;

export const BplanButtons = styled.div`
    min-height: 52px;
    margin-top: 15px;   
    
`;

export const BplanButtonsContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;
    position: relative;

    @media ( max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const BplanButtonsDiv = styled.div`
    margin-left: 10px;
    
    @media ( max-width: 600px) {
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        margin-top: 12px;

        button {
            width: 100%
        }
    }

    svg {
        height: 15px;
        width: 15px;
        margin-right: 5px;
    }
`;


export const HiddenContent = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all ease .5s;
    overflow-y: auto;
    display: none;
    /* display: flex; */
    flex-direction: column;

    @media (min-width: 1200px) {
        padding-left: 280px;
    }
`;