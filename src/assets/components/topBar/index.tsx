import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiAlignJustify, FiBell, FiUsers } from "react-icons/fi";


import Sidebar from '../Sidebar';
import {Container, Topbar, HiddenButton, SearchButton} from './styles';


const TopBar: React.FC = () => {
  const [sidebar, setSidebar] = React.useState(false)
  const showSidebar = () => {setSidebar(!sidebar);};

    return (   
    <>
      <Container>
        <Topbar>
          <SearchButton>
            <HiddenButton>
              <button type="button" title="Menu" onClick={showSidebar}>
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
              <a href="/profile">
                <img src="https://i.pravatar.cc/300" alt="" />
              </a>
            </span>
          </label>

        </Topbar>

      </Container>
      <Sidebar />
    </>
)}

export default TopBar;