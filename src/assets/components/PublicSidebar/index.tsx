import * as React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { PublicListStyle, Toplist } from './styles';
import { FiLayers } from 'react-icons/fi';



const PublicSidebar: React.FC = () =>  {


  return (
         <PublicListStyle>
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
                    <Link to="/">
                        <ListItemButton href="#simple-list">
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                  

                <Link to="signin">
                    <ListItemButton href="#simple-list">
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </Link>
                
                <Link to="signup">
                    <ListItemButton href="#simple-list">
                        <ListItemText primary="Cadastrar" />
                    </ListItemButton>
                </Link>
              </List>
           </PublicListStyle>
  );
}

export default PublicSidebar;