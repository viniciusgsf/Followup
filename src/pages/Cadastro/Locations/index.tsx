import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as Yup from 'yup'; 

import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";

import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv
} from './styles';
import { useHistory } from "react-router-dom";
import api from "../../../services/apiClient";
import { Form } from "@unform/web";
import getValidationErrors from "../../../utils/getValidationErrors";
import { Dialogbox } from "../Countries/styles";
import { FormHandles } from "@unform/core";

interface IStates {
    id: string;
    name: string;
}

interface Country {
    id: string;
    name: string;
  }

const Locations: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const [state, setState] = React.useState('');
    const [states, setStates] = useState<IStates[]>([])
    
    const [country, setCountry] = React.useState('');
    const [paises, setPaises] = useState<Country[]>([]);

    const [locations, setLocations] = useState<IStates[]>([]);
    const [location, setLocation] = React.useState<Country>();
    const history = useHistory();
    const formRef = useRef<FormHandles>(null);
    
    useEffect(() => {
        async function fetchMyAPI() {        
            SetCountriesList();

            if(country){
                //const response = await api.get<IStates[]>("")        
                //setStates(response.data)                
                setLoading(false);  
            }            
        }

        fetchMyAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    useEffect(() => { 
        getStates(country);
     }, [country])

     useEffect(() => { 
        getLocations(state);
     }, [state])
    
    const SetCountriesList = async () => {
      const resp = await api.get(`/countries`);
      const respData = resp.data;
      setPaises(respData);
      setCountry(respData[0].id);
      
  }


    const getStates = async (country: string) => {
        if(country){
        const resp = await api.get(`/states/${country}`);
        const respData = resp.data;
        setStates(respData);
        setLoading(false);
        }
    }

    const getLocations = async (state: string) => {
        if(state){
        const resp = await api.get(`/locations/${state}`);
        const respData = resp.data;
        setLocations(respData);
        setLoading(false);
        }
    }
    
    const handleCreateState = () => {
        history.push('/locations/add')
    }

    const handleCountryChange = (event: SelectChangeEvent) => {        
        setCountry(event.target.value as string);
      };
      const handleStateChange = (event: SelectChangeEvent) => {        
        setState(event.target.value as string);
      };  

    const handleDeleteLocation = async (location:string) => {
               
        await api.delete(`/locations/${location}`)
        
        setLocations(locations.filter(s => s.id !== location))
        setLoading(false);
        setOpen(false);
         
    }

    const handleSubmit = useCallback( async (data: IStates) => {
        
        try {
            
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),              
            });
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.patch('/locations', data);
            setOpenUpdate(false);
            
        } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
      }, []);
    

    const handleClickOpen = (location:Country) => {
        setLocation(location)
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

      const handleClickUpdateOpen = (location:Country) => {        
        setLocation(location)
        setOpenUpdate(true);
      };
    
    const handleUpdateClose = () => {
        setOpenUpdate(false);
      };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        <Container>
            <SubContainer>
                <Content>
                    <MainContent>
                        <TopContent>
                            <Topside>
                                <h4>Cadastro de Localidades</h4>
                            </Topside>
                            <BottomSide>
                                <BottomContainer>
                                    <BottomInputs>
                                        <label>
                                            
                                            <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">País</InputLabel>
                                                {paises.length > 0 &&
                                                <Select
                                                name="country_id"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                defaultValue={paises[0].id}
                                                label="País"
                                                onChange={handleCountryChange}
                                                >

                                                {paises.map((pais) => {
                                                    return (
                                                    <MenuItem key={pais.id} value={pais.id}>{pais.name}</MenuItem>
                                                    )
                                                } )}

                                                </Select>
                                                }
                                            </FormControl>
                                            </Box> 
                                            <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                                {states.length > 0 &&
                                                <Select
                                                name="state_id"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                               
                                                label="País"
                                                onChange={handleStateChange}
                                                >

                                                {states.map((state) => {
                                                    return (
                                                    <MenuItem key={state.id} value={state.id}>{state.name}</MenuItem>
                                                    )
                                                } )}

                                                </Select>
                                                }
                                            </FormControl>
                                            </Box> 
                                        </label>
                                        
                                    </BottomInputs>
                                </BottomContainer>
                            </BottomSide>
                        </TopContent>
                        <BottomContent>
                            <ContentContainer>
                                <ContentInfo> 
                                    <TableScrollbar>
                                    {loading ? (<TableItens></TableItens>): 
                                        <TableItens>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <TableCheckbox>
                                                            <span>
                                                                <Checkbox {...label} />
                                                            </span>
                                                        </TableCheckbox>
                                                        
                                                        
                                                        <th>Nome da cidade</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                        
                                                        { locations.map(location => {
                                                        return (
                                                            <tr key={location.id}>
                                                                <TableCheckbox>
                                                                    <span>
                                                                        <DeleteIcon onClick={() => {handleClickOpen(location)}} />                                                                                                                                       
                                                                        <EditIcon onClick={() => {handleClickUpdateOpen(location)}}/>
                                                                    </span>
                                                                </TableCheckbox>
                                                                
                                                                <th>{location.name}</th>
                                                                
                                                            </tr>                                                         
                                                        )
                                                        }) }                                                          
                                                </TableBody>
                                            </table>
                                        </TableItens>
                                        }
                                    </TableScrollbar>
                                    <InteractiveButtons>
                                        <InteractiveButtonsContent>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained" onClick={handleCreateState}>Incluir</Button>
                                            </InteractiveButtonsDiv>
                                            
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained"><FiCheck/>Confirmar</Button>
                                            </InteractiveButtonsDiv>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained"><FiCircle/>Renovar</Button>
                                            </InteractiveButtonsDiv>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained"><AiOutlineClose/>Fechar</Button>
                                            </InteractiveButtonsDiv>
                                        </InteractiveButtonsContent>
                                    </InteractiveButtons>
                                </ContentInfo>
                            </ContentContainer>
                        </BottomContent>
                    </MainContent>
                </Content>
            </SubContainer>
        </Container>
        <SideBar />
        <TopBar/>
        <Dialogbox>
        <Dialog
            open={openUpdate}
            onClose={handleUpdateClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Edição de dados"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Edite os dados relacionado a {location?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions >
                <span>                                        
                <Form ref={formRef} onSubmit={handleSubmit}>   
                    <Input name="name"  defaultValue={location?.name} placeholder="Digite o país..." />  
                </Form>
                </span> 
            </DialogActions>
        </Dialog>
       
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Tem certeza que quer excluir esse país?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Clique em Sim se você deseja excluir {location?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Form ref={formRef} onSubmit={handleDeleteLocation}>   
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="submit" autoFocus>
                        Sim
                    </Button>
                </Form>
            </DialogActions>
        </Dialog>
        </Dialogbox>
        </>
    )
}

export default Locations;