import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiAlignJustify, FiBell, FiPower, FiUsers } from "react-icons/fi";
import { useAuth } from "../../../hooks/AuthContext";


import Sidebar from '../AuthSidebar';
import {Container, Topbar, HiddenButton, SearchButton} from './styles';


const TopBar: React.FC = () => {

  const { signOut } = useAuth();

    // const [showSidebar, setShowSidebar] = useState(true)
    // const toggleSidebar = () => setShowSidebar(!showSidebar)
  
    return (   
    <>
      <Container>
        <Topbar>
          <SearchButton>
            <HiddenButton >
              <button type="button" title="Menu" >
                <FiAlignJustify/>
              </button>
            </HiddenButton>
              <button type="button" title="Buscar">
                <AiOutlineSearch/>
              </button>
          </SearchButton>
          
          
          <label>
            <button type="button" title="Contatos">
              <FiUsers/>
            </button>
            
            <button type="button" title="Notificações">
              <FiBell/>
            </button>

            <span>
            <button type="button" onClick={signOut}>
                <FiPower/>
            </button>
            </span>
          </label>
        

        </Topbar>

      </Container>
      <Sidebar />
    </>
)}

export default TopBar;