import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Input } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import api from "../../../services/apiClient";
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as Yup from 'yup'; 

import { FiCheck, FiCircle, FiSearch } from "react-icons/fi";
import SearchInput from "../../../assets/components/SearchInput";
import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";
import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, ButtonDiv, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv
} from './styles';
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import getValidationErrors from "../../../utils/getValidationErrors";
import { Dialogbox } from "../Countries/styles";

interface INationality {
    id: string;
    name: string;
}
 

const Nationality: React.FC = () => {

    const [nationality, setNationality] = useState<INationality[]>([])
    const [nationalities, setNationalities] = React.useState<INationality>();

    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const history = useHistory();
    const formRef = useRef<FormHandles>(null);
    
    useEffect(() => {
        async function fetchMyAPI() {        
        let response = await api.get<INationality[]>("Nationality")        

        setNationality(response.data)
        setLoading(false);  
    }

    fetchMyAPI()
    }, [])

    const handleCreate = () => {
        history.push('/nationalities/add')
    }

    
    const handleDeleteNationality= async (nationality:string) => {
       
        await api.delete(`/Nationality/${nationality}`)
        let response = await api.get<INationality[]>("Nationality")
        setNationality(response.data)
        setLoading(false);
        setOpen(false);
         
    }

    const handleSubmit = useCallback( async (data: INationality) => {
        
        try {
            
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),              
            });
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.patch('/Nationality', data);
            setOpenUpdate(false);
            
        } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
      }, []);

    const handleClickOpen = (nationalities:INationality) => {
        setNationalities(nationalities)
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleClickUpdateOpen = (nationalities:INationality) => {        
        setNationalities(nationalities)
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
                                <h4>Nacionalidade</h4>
                            </Topside>
                            <BottomSide>
                                <BottomContainer>
                                    <BottomInputs>
                                        <label>
                                            <ButtonDiv>
                                            <SearchInput name="businessplan" icon={FiSearch} type="text" placeholder="Buscar..."/>
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
                                                        <th>Nacionalidade</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                    <tr>
                                                       
                                                    </tr>
                                                    { nationality.map(nationalities => {
                                                        return (
                                                            <tr key={nationalities.id}>
                                                                <TableCheckbox>
                                                                    <span>
                                                                        <DeleteIcon onClick={() => {handleClickOpen(nationalities)}} />                                                                                                                                       
                                                                        <EditIcon onClick={() => {handleClickUpdateOpen(nationalities)}}/>
                                                                    </span>
                                                                </TableCheckbox>
                                                                <th>{nationalities.id}</th>
                                                                <th>{nationalities.name}</th>
                                                                
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
                    Edite os dados relacionado a {nationalities?.name}
                </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <span>                                        
                    <Form ref={formRef} onSubmit={handleSubmit}>   
                        <Input name="name"  defaultValue={nationalities?.name} placeholder="Digite o país..." />  
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
                    Clique em Sim se você deseja excluir {nationalities?.name}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Form ref={formRef} onSubmit={handleDeleteNationality}>   
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

export default Nationality;