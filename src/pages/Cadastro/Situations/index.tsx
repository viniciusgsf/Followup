import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Input } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Yup from 'yup'; 
import { FiCheck, FiCircle, FiSearch } from "react-icons/fi";
import SearchInput from "../../../assets/components/SearchInput";
import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";
import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, ButtonDiv, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv
} from './styles';
import api from "../../../services/apiClient";
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import getValidationErrors from "../../../utils/getValidationErrors";
import { Dialogbox } from "../Countries/styles";

interface ISituation {
    id: string;
    name: string;
}
 

const Situations: React.FC = () => {

    const [situation, setSituation] = useState<ISituation[]>([])
    const [situations, setSituations] = React.useState<ISituation>();

    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    
    useEffect(() => {
        async function fetchMyAPI() {        
        let response = await api.get<ISituation[]>("Situation")        

        setSituation(response.data)
        setLoading(false);  
    }

    fetchMyAPI()
    }, [])

    const handleCreate = () => {
        history.push('/situations/add')
    }

    
    const handleDeleteSituation= async (situation:string) => {
       
        await api.delete(`/Situation/${situation}`)
        let response = await api.get<ISituation[]>("Situation")
        setSituation(response.data)
        setLoading(false);
        setOpen(false);
         
    }

    const handleSubmit = useCallback( async (data: ISituation) => {
        
        try {
            
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),              
            });
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.patch('/Situation', data);
            setOpenUpdate(false);
            
        } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
      }, []);

    const handleClickOpen = (situations:ISituation) => {
        setSituations(situations)
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleClickUpdateOpen = (situations:ISituation) => {        
        setSituations(situations)
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
                                <h4>Situações</h4>
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
                                                        <th>Estado da Situação</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                    <tr>
                                                       
                                                    </tr>
                                                    { situation.map(situations => {
                                                        return (
                                                            <tr key={situations.id}>
                                                                <TableCheckbox>
                                                                    <span>
                                                                        <DeleteIcon onClick={() => {handleClickOpen(situations)}} />                                                                                                                                       
                                                                        <EditIcon onClick={() => {handleClickUpdateOpen(situations)}}/>
                                                                    </span>
                                                                </TableCheckbox>
                                                                <th>{situations.id}</th>
                                                                <th>{situations.name}</th>
                                                                
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
                    Edite os dados relacionado a {situations?.name}
                </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <span>                                        
                    <Form ref={formRef} onSubmit={handleSubmit}>   
                        <Input name="name"  defaultValue={situations?.name} placeholder="Digite o país..." />  
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
                    Clique em Sim se você deseja excluir {situations?.name}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Form ref={formRef} onSubmit={handleDeleteSituation}>   
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

export default Situations;