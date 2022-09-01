import React from "react";
import { FiAlignJustify } from "react-icons/fi";



import Sidebar from '../AuthSidebar';
import {Container, Topbar, HiddenButton} from './styles';


const PublicTopbar: React.FC = () => {
  
    return (   
    <>
      <Container>
        <Topbar>
          
            <HiddenButton >
              <button type="button" title="Menu" >
                <FiAlignJustify/>
              </button>
            </HiddenButton>
             
        </Topbar>

      </Container>
      <Sidebar />
    </>
)}

export default PublicTopbar;