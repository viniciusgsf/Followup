import * as React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { ListStyle, Toplist } from './styles';
import { FiLayers } from 'react-icons/fi';



export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [openSecList, setOpenSecList] = React.useState(false);
  const handleAltClick = () => {
    setOpenSecList(!openSecList);
  };

  return (
         <ListStyle>
            <div >
                <Toplist>
                   <div>
                        <h6>Acme Inc</h6>
                        <p>Your tier:</p>
                   </div>
                   <FiLayers/>
                </Toplist>
            </div>
            <hr />
              <List
                  sx={{ width: '100%', height: '100%', bgcolor: '#1565c0', color: '#FFf' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"

              >
                  <ListItemButton>
                      <ListItemText primary="Dashboard" />
                  </ListItemButton>
                  <ListItemButton onClick={handleClick}>
                      <ListItemText primary="Geral" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>

                      <List sx={{ width: '100%', height: '100%', bgcolor: '#1565c0', color: '#FFf' }} component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Plano de Negócio" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Forma de Tratamento" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Função" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Profissão" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Estágio" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Situação" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Logradouros" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Tipo de telefone" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Ramo" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Segmento" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Sub-fonte" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Fonte" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Tipos de logradouros" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Bairros" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Localidades" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Estados" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Nacionalidade" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="País" />
                          </ListItemButton>
                      </List>

                  </Collapse>
                  <ListItemButton onClick={handleAltClick}>
                      <ListItemText primary="Follow-up" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openSecList} timeout="auto" unmountOnExit>

                      <List sx={{ width: '100%', height: '100%', bgcolor: '#1565c0', color: '#FFf' }} component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Motivo de Contato" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Meio de Contato" />
                          </ListItemButton>
                      </List>

                  </Collapse>
                  <ListItemButton >
                      <ListItemText primary="Perfil" />
                  </ListItemButton>
                  <ListItemButton href="#simple-list">
                      <ListItemText primary="Configurações" />
                  </ListItemButton>
                    <ListItemButton >
                        <ListItemText primary="Login" />
                    </ListItemButton>
                  
                  <ListItemButton href="#simple-list">
                      <ListItemText primary="Cadastro" />
                  </ListItemButton>
              </List>
           </ListStyle>
  );
}