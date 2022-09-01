import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle, } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FormHandles } from "@unform/core";
import * as Yup from 'yup'; 

import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";

import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv, Dialogbox
} from './styles';
import { useHistory } from "react-router-dom";
import api from "../../../services/apiClient";
import getValidationErrors from "../../../utils/getValidationErrors";
import { Form } from "@unform/web";

interface IStates {
    id: string;
    name: string;
}

interface Country {
    id: string;
    name: string;
  }

const States: React.FC = () => {

    const [states, setStates] = useState<IStates[]>([])
    const [state, setState] = useState<Country>();
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [country, setCountry] = React.useState('');
    const [paises, setPaises] = useState<Country[]>([]);
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
    
    const handleCreateState = () => {
        history.push('/states/add')
    }

    const handleCountryChange = (event: SelectChangeEvent) => {        
        setCountry(event.target.value as string);
      };

    const handleDeleteState = async (state:string) => {
               
        await api.delete(`/states/${state}`)
        
        setStates(states.filter(s => s.id !== state))
        setLoading(false);
        setOpen(false);
         
    }

    const handleClickOpen = (state:Country) => {
        setState(state)
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

      const handleClickUpdateOpen = (state:Country) => {        
        setState(state)
        setOpenUpdate(true);
      };
    
    const handleUpdateClose = () => {
        setOpenUpdate(false);
      };

      const handleSubmit = useCallback( async (data: IStates) => {
        
        try {
            
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),              
            });
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.patch('/states', data);
            setOpenUpdate(false);
            
        } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
      }, []);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        <Container>
            <SubContainer>
                <Content>
                    <MainContent>
                        <TopContent>
                            <Topside>
                                <h4>Cadastro de estados</h4>
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
                                                        
                                                        
                                                        <th>Nome do País</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                        
                                                    { states.map(state => {
                                                        return (
                                                            <tr key={state.id}>
                                                                <TableCheckbox>
                                                                    <span>
                                                                    <DeleteIcon onClick={() => {handleClickOpen(state)}} />                                                                                                                                       
                                                                    <EditIcon onClick={() => {handleClickUpdateOpen(state)}}/>
                                                                    </span>
                                                                </TableCheckbox>
                                                                <th>{state.id}</th>
                                                                <th>{state.name}</th>                                                                
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
                Edite os dados relacionado a {state?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions >
                <span>                                        
                <Form ref={formRef} onSubmit={handleSubmit}>   
                    <Input name="name"  defaultValue={state?.name} placeholder="Digite o país..." />  
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
                Clique em Sim se você deseja excluir {state?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Form ref={formRef} onSubmit={handleDeleteState}>   
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

export default States;