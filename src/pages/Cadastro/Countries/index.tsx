import { Button, Checkbox, Dialog , DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiCheck, FiCircle, FiSearch } from "react-icons/fi";
import SearchInput from "../../../assets/components/SearchInput";

import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";
import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, ButtonDiv, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv, Dialogbox
} from './styles';
import api from "../../../services/apiClient";
import { useHistory } from "react-router-dom";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../../utils/getValidationErrors";
import * as Yup from 'yup'; 
import Input from "../../../assets/components/input";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface CountryFormData {
    id: string;
    name: string;  
}
interface Country {
    id: string;
    name: string;
}


const Countries: React.FC = () => {

    const [paises, setPaises] = useState<Country[]>([])
    const [pais, setPais] = useState<Country>();
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        async function fetchMyAPI() {        
        let response = await api.get<Country[]>("countries")        

        setPaises(response.data)
        setLoading(false);  
    }

    fetchMyAPI()
    }, [])

    const handleCreate = () => {
        history.push('/countries/add')
    }

    
    const handleDeleteCountry = async (pais:Country) => {
       
        await api.delete(`/countries/${pais.id}`)
        let response = await api.get<Country[]>("countries")
        setPaises(response.data);
        setLoading(false);
        setOpen(false);
         
    }

    

    const handleClickOpen = (pais:Country) => {
        setPais(pais)
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

      const handleClickUpdateOpen = (pais:Country) => {        
        console.log(pais);
        setPais(pais)
        setOpenUpdate(true);
      };
    
    const handleUpdateClose = () => {
        setOpenUpdate(false);
      };


    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async (data: CountryFormData) => {
        
        try {
            
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),              
            });
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.patch('/countries', data);
            setOpenUpdate(false);
            
        } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
      }, []);
    
    return (
        <>
        <Container>
            <SubContainer>
                <Content>
                    <MainContent>
                        <TopContent>
                            <Topside>
                                <h4>Países</h4>
                            </Topside>
                            <BottomSide>
                                <BottomContainer>
                                    <BottomInputs>
                                        <label>
                                            <ButtonDiv>
                                            <SearchInput name="businessplan" icon={FiSearch} type="text" placeholder="Código"/>
                                            </ButtonDiv>    
                                            <ButtonDiv>
                                            <SearchInput name="description" icon={FiSearch} type="text" placeholder="Nome do País"/>
                                            </ButtonDiv>
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
                                        (<TableItens>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <TableCheckbox>
                                                            <span>
                                                                <Checkbox {...label} />
                                                            </span>
                                                        </TableCheckbox>
                                                        <th>Código</th>
                                                        <th>Nome do País</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                    <tr>
                                                       
                                                    </tr>
                                                    { paises.map(pais => {
                                                        return (
                                                            <tr key={pais.id}>
                                                                <TableCheckbox>
                                                                    <span>
                                                                    <DeleteIcon onClick={() => {handleClickOpen(pais)}} />                                                                                                                                       
                                                                    <EditIcon onClick={() => {handleClickUpdateOpen(pais)}}/>
                                                                    </span>
                                                                </TableCheckbox>
                                                                <th>{pais.id}</th>
                                                                <th>{pais.name}</th>                                                                
                                                            </tr>                                                                                                                        
                                                        )
                                                        }) }
                                                </TableBody>
                                            </table>
                                        </TableItens>)}
                                        
                                    </TableScrollbar>
                                    <InteractiveButtons>
                                        <InteractiveButtonsContent>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained" onClick={handleCreate}>Incluir</Button>
                                            </InteractiveButtonsDiv>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained"><FiCheck/>Confirmar</Button>
                                            </InteractiveButtonsDiv>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained"><FiCircle/>Renovar</Button>
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
                Edite os dados relacionado a {pais?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions >
                <span>                                        
                <Form ref={formRef} onSubmit={handleSubmit}>   
                    <Input name="id"  defaultValue={pais?.id} disabled/> 
                    <Input name="name"  defaultValue={pais?.name} placeholder="Digite o país..." />  
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
                Clique em Sim se você deseja excluir {pais?.name}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Form ref={formRef} onSubmit={handleDeleteCountry}>   
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

export default Countries;