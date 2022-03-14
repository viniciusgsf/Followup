import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiBell, FiUsers } from "react-icons/fi";

import Input from "../input";
import Sidebar from '../sideMenu';
import {Container, Topbar} from './styles';

const TopBar: React.FC = () => (   
    <>
      <Container>
        <Topbar>
            <button type="button" title="Buscar">
              <Input name="email" icon={AiOutlineSearch} type="text" placeholder="Buscar..." />
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
                <img src="https://i.pravatar.cc/300" alt="" />
              </a>
            </span>
          </label>

        </Topbar>

      </Container>
      <Sidebar/>
    </>
) 

export default TopBar;