import styled from "styled-components";

import image from '../../assets/images/coffee-g919d3d718_1920.png';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    padding-top: 64px;
    background: url(${image}) no-repeat center;
    background-size: cover;

    @media (min-width: 1200px) {
        padding-left: 280px;
    }
`;

export const Content = styled.div`
    display: flex;
    

    h1 {
        font-size: 120px;
        font-family: 'DynaPuff', cursive;
        margin-left: 30px;
    }
`;

