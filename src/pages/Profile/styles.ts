import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
    padding-top: 64px;

`;

export const SubContainer = styled.div `
    padding-top: 64px;
    padding-bottom: 64px;
    flex: 1 1 auto;
    max-width: 100%;

    @media (min-width: 1200px) {
        padding-left: 280px;
    }
`;

export const Content = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
`;

export const MainContent = styled.main`
    flex-grow: 1;
    padding-bottom: 64px;
`;

export const InfoContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1200px) {
        max-width: 1200px;
    }
    

    h4 {
        margin: 0px 0px 24px;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.375;
    }
`;

export const ProfileContainer = styled.div `
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-top: -24px;
    width: calc(100% + 24px);
    margin-left: -24px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const ProfileCardContainer = styled.div `
    padding-left: 24px;
    padding-top: 24px;

    
    @media (min-width: 1200px) {
        flex-basis: 33.3333%;
        flex-grow: 0;
        max-width: 33.3333%;
    }

    
    @media (max-width: 1000px) {
        flex-basis: 50%;
        -moz-box-flex: 0;
        flex-grow: 0;
        max-width: 50%;
    }

    @media (max-width: 600px) {
        max-width: 100%;
    }

    
`;

export const ProfileCardStyles = styled.div `
    background-color: #FFFFFF;
    color: #121828;
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
    overflow: hidden;
`;

export const ProfileCardPadding = styled.div `
    padding: 32px 24px;
`;

export const ProfileCardContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
       
        justify-content: center;
        flex-shrink: 0;
        font-size: 1.25rem;
        line-height: 1;
        border-radius: 50%;
        overflow: hidden;
        user-select: none;
        height: 64px;
        margin-bottom: 16px;
        width: 64px;
        align-items: center;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            text-align: center;
            object-fit: cover;
            color: transparent;
            text-indent: 10000px;
            }
        }

    h2 {
        margin: 0px 0px 0.35em;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.375;
        color: rgb(18, 24, 40);
    }
    p {
        margin: 0px;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.57;
        color: rgb(101, 116, 139);
        }
    
`;

export const UploadAvatarButton = styled.div`
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    width: 100%;
   


    img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    label {
        justify-content: center;
        align-items: center;    
        display: flex;
        width: 48px;
        height: 48px;
        background: #4039b7;
        cursor: pointer;
        border-radius: 50%;
        margin: auto;
        transition: background-color 0.2s;

        input {
            display: none;
            
        }

        svg {
            width: 20px;
            height: 20px;
            color: #fff;
            
        }

        &:hover {
            background: ${shade(0.2, '#4039b7')};
        }
    }
`;


export const ProfileInfoChangeContainer = styled.div `
    padding-left: 24px;
    padding-top: 24px;

    
    @media (min-width: 1200px) {
        flex-basis: 66.6666%;
        flex-grow: 0;
        max-width: 66.6666%;
    }

    
    @media (max-width: 1000px) {
        flex-basis: 50%;
        -moz-box-flex: 0;
        flex-grow: 0;
        max-width: 50%;
    }

    @media (max-width: 600px) {
        max-width: 100%;
    }
`;

export const ProfileInfoChangeStyles = styled.div `
    background-color: #FFFFFF;
    color: #121828;
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
    overflow: hidden;

    hr {
        margin: 0;
        flex-shrink: 0;
        border-width: 0;
        border-bottom-width: 0px;
        border-style: solid;
        border-color: #E6E8F0;
        border-bottom-width: thin;
    }
`;

export const ProfileInfoChangeTitle = styled.div `
    display: flex;
    align-items: center;
    padding: 16px;
    padding: 32px 24px;

    .subtitle {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.57;
        color: #65748B;
        display: block;
        }

    span {
        margin: 0;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.375;
        display: block;

    }

`;

export const ProfileInfoCampsContainer = styled.div `
      padding: 32px 24px;
`;

export const ProfileInfoCampsContent = styled.div `
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-direction: column;
    
    

    
`;

export const DropdownStateInput = styled.div `
    height: 52px;
    width: 100%;
    margin-top: 13px;
    
    div {
        border-radius: 7px;
    }
`;

export const ProfileButtonCamp = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;
    padding-top: 10px;
    padding-right: 12px;

    @media (max-width: 600px) {
        justify-content: center;
    }

    button {
        width: 180px;
        height: 42px;
    }
`;
