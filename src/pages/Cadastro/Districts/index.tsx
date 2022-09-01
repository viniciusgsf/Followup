import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as Yup from 'yup'; 
import { FormHandles } from "@unform/core";

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

interface IStates {
    id: string;
    name: string;
}

interface Country {
    id: string;
    name: string;
  }

const Districts: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const [state, setState] = React.useState('');
    const [states, setStates] = useState<IStates[]>([])
    
    const [country, setCountry] = React.useState('');
    const [paises, setPaises] = useState<Country[]>([]);

    const [locations, setLocations] = useState<IStates[]>([]);
    const [locationsList, setLocationsList] = React.useState('');

    const [districs, setDistricts] = useState<IStates[]>([]);
    const [district, setDistrict] = React.useState<Country>();
    const formRef = useRef<FormHandles>(null);

    const history = useHistory();
    
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
     useEffect(() => { 
        getDistricts(locationsList);
     }, [locationsList])
    
    
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

    const getDistricts = async (location: string) => {
        if(location){
        const resp = await api.get(`/districts/${location}`);
        const respData = resp.data;
        setDistricts(respData);
        setLoading(false);
        }
    }
    
    const handleCreateState = () => {
        history.push('/districts/add')
    }

    const handleCountryChange = (event: SelectChangeEvent) => {        
        setCountry(event.target.value as string);
      };
    const handleStateChange = (event: SelectChangeEvent) => {        
        setState(event.target.value as string);
      };  

    const handleLocationChange = (event: SelectChangeEvent) => {        
        setLocationsList(event.target.value as string);
    }; 
    

    const handleDeleteDistrict= async (district:string) => {
               
        await api.delete(`/districts/${district}`)
        
        setDistricts(districs.filter(s => s.id !== district))
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
      
            await api.patch('/districts', data);
            setOpenUpdate(false);
            
        } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
      }, []);
    

      const handleClickOpen = (district:Country) => {
        setDistrict(district)
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

      const handleClickUpdateOpen = (district:Country) => {        
        setDistrict(district)
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
                                <h4>Cadastro de Bairros</h4>
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
                                               
                                                label="Estado"
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

                                            <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
                                                {/* {locations.length > 0 && */}
                                                <Select
                                                name="location_id"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                               
                                                label="Cidade"
                                                onChange={handleLocationChange}
                                                >

                                                {locations.map((location) => {
                                                    return (
                                                    <MenuItem key={location.id} value={location.id}>{location.name}</MenuItem>
                                                    )
                                                } )}

                                                </Select>
                                                {/* } */}
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
                                                        
                                                        
                                                        <th>Nome do bairro</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                        
                                                        { districs.map(distric => {
                                                        return (
                                                            <tr key={distric.id}>
                                                                <TableCheckbox>
                                                                    <span>
                                                                        <DeleteIcon onClick={() => {handleClickOpen(distric)}} />                                                                                                                                       
                                                                        <EditIcon onClick={() => {handleClickUpdateOpen(distric)}}/>
                                                                    </span>
                                                                </TableCheckbox>
                                                                
                                                                <th>{distric.name}</th>
                                                                
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
                Edite os dados relacionado a {district?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions >
                <span>                                        
                <Form ref={formRef} onSubmit={handleSubmit}>   
                    <Input name="name"  defaultValue={district?.name} placeholder="Digite o país..." />  
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
                Clique em Sim se você deseja excluir {district?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Form ref={formRef} onSubmit={handleDeleteDistrict}>   
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

export default Districts;