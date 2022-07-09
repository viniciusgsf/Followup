import * as React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/home">
                        <ListItemButton href="#simple-list">
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                  <ListItemButton onClick={handleClick}>
                      <ListItemText primary="Geral" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>

                      <List sx={{ width: '100%', height: '100%', bgcolor: '#1565c0', color: '#FFf' }} component="div" disablePadding>
                          
                        <Link to="businessPlan">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Plano de Negócio" />
                          </ListItemButton>
                        </Link>

                        <Link to="treatmentForm">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Forma de Tratamento" />
                          </ListItemButton>
                        </Link>

                        <Link to="functions">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Funções" />
                          </ListItemButton>
                        </Link>  

                        <Link to="profession">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Profissão" />
                          </ListItemButton>
                        </Link>

                        <Link to="estagios">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Estágios" />
                          </ListItemButton>
                        </Link>

                        <Link to="situations">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Situação" />
                          </ListItemButton>
                        </Link>

                        <Link to="publicPlace">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Logradouros" />
                          </ListItemButton>
                        </Link>

                        <Link to="PublicPlaceTypes">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Tipo de Logradouros" />
                          </ListItemButton>
                        </Link>

                        <Link to="ramos">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Ramos" />
                          </ListItemButton>
                        </Link>

                        <Link to="fonts">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Fontes" />
                          </ListItemButton>
                        </Link>

                        <Link to="subFonts">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Sub-fontes" />
                          </ListItemButton>
                        </Link>

                        <Link to="segments">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Segmentos" />
                          </ListItemButton>
                        </Link>

                        <Link to="phoneTypes">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Tipo de telefone" />
                          </ListItemButton>
                        </Link>

                        <Link to="bairros">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Bairros" />
                          </ListItemButton>
                        </Link>

                        <Link to="locals">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Localidades" />
                          </ListItemButton>
                        </Link>
                        <Link to="states">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Estados" />
                          </ListItemButton>
                        </Link>

                        <Link to="nationalities">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Nacionalidade" />
                          </ListItemButton>
                        </Link>

                        <Link to="countries">
                          <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Países" />
                          </ListItemButton>
                        </Link>
                      </List>

                  </Collapse>
                  <ListItemButton onClick={handleAltClick}>
                      <ListItemText primary="Follow-up" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openSecList} timeout="auto" unmountOnExit>

                      <List sx={{ width: '100%', height: '100%', bgcolor: '#1565c0', color: '#FFf' }} component="div" disablePadding>
                        <Link to="/contactmotives">
                            <ListItemButton href="#simple-list">
                                <ListItemText primary="Motivo de contato" />
                            </ListItemButton>
                        </Link>
                        <Link to="/contactways">
                            <ListItemButton href="#simple-list">
                                <ListItemText primary="Meios de contato" />
                            </ListItemButton>
                        </Link>
                      </List>

                  </Collapse>
                  <Link to="profile">
                    <ListItemButton href="#simple-list">
                        <ListItemText primary="Perfil" />
                    </ListItemButton>
                  </Link>
                  <Link to="settings">
                  <ListItemButton href="#simple-list">
                      <ListItemText primary="Configurações" />
                  </ListItemButton>
                  </Link>

              </List>
           </ListStyle>
  );
}

