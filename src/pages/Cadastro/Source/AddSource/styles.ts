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

export const TopContent = styled.div`
    
`;
export const Topside = styled.div`
    display: flex;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;

    h4 {
        font-weight: 700;
        font-size: 2rem;
        margin: 8px;
    }

   a {
       text-decoration: none;
       
       h2 {
        font-size: 12px;
        margin: 8px;
    }

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
    align-items: center;
    justify-content: center;
    padding-top: 12px ;
    padding-bottom: 12px ;
    

    form {
        max-width: 520px;
        margin: auto;
        
    }

    div {
        width: 100%;
        height: 52px;
        border-radius: 7px;
        margin-top: 5px;

    }

`;

export const BottomInputs = styled.div `

    :last-child {
        padding-bottom: 32px
    }
    padding: 32px 24px;

    label {
        display: flex;
        flex-direction: row;

        @media (max-width: 600px) {
            flex-direction: column;
        }
    }
`;

export const ButtonDiv = styled.div`
    margin-right: 10px;
    width: 100%;
`;




export const BottomContent = styled.div `
    margin-top: 24px;
`;

export const ContentContainer = styled.div `

    background-color: #FFF;
    color: #121828;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
    overflow: hidden;


    
`;

export const ContentInfo = styled.div `
    box-sizing: border-box;
    margin: 0;
`;



