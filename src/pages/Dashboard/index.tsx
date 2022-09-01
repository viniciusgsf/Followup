import React from "react";

import PublicTopbar from "../../assets/components/PublicTopbar";
import PublicSidebar from "../../assets/components/PublicSidebar";

import {Container, Content} from './styles';



const Dashboard:React.FC = ( ) => (
    <>
        <Container> 
        <PublicTopbar/>
        <PublicSidebar/>
            <Content>
                <h1>Followup</h1>
            </Content>

        </Container> 
    </>
)

export default Dashboard;