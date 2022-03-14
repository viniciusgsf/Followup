import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiBell, FiUsers } from "react-icons/fi";

import {Container, Topbar} from './styles';

const TopBar: React.FC = () => (   
    <>
      <Container>
        <Topbar>
          <button type="button" title="Buscar">
            <AiOutlineSearch/>
          </button>

          <label>
            <button type="button" title="Contatos">
              <FiUsers/>
            </button>
            
            <button type="button" title="Notificações">
              <FiBell/>
            </button>

            <span>
              <a href="/profile">
                <img src="" alt="" />
              </a>
            </span>
          </label>

        </Topbar>

      </Container>
      
    </>
) 

export default TopBar;