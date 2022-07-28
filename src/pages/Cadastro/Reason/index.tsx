import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiCheck, FiCircle, FiSearch } from "react-icons/fi";
import SearchInput from "../../../assets/components/SearchInput";
import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";
import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, ButtonDiv, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv
} from './styles';
import api from "../../../services/apiClient";
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


interface IReason {
    id: string;
    name: string;
}
 

const Reason: React.FC = () => {

    const [reason, setReason] = useState<IReason[]>([])
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        async function fetchMyAPI() {        
        let response = await api.get<IReason[]>("Reason")        

        setReason(response.data)
        setLoading(false);  
    }

    fetchMyAPI()
    }, [])

    const handleCreate = () => {
        history.push('/reason/add')
    }

    
    const handleDeleteTreatmentForm= async (reason:string) => {
       
        await api.delete(`/Reason/${reason}`)
        let response = await api.get<IReason[]>("Reason")
        setReason(response.data)
        setLoading(false);
        setOpen(false);
         
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
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
                                <h4>Razão</h4>
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
                                                        <th>Titulo</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                    <tr>
                                                       
                                                    </tr>
                                                    { reason.map(reasons => {
                                                        return (
                                                            <tr key={reasons.id}>
                                                                <TableCheckbox>
                                                                    <span>
                                                                    <DeleteIcon  onClick={handleClickOpen}>
                                                                    </DeleteIcon >
                                                                    <Dialog
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        aria-labelledby="alert-dialog-title"
                                                                        aria-describedby="alert-dialog-description"
                                                                    >
                                                                        <DialogTitle id="alert-dialog-title">
                                                                        {"Tem certeza que quer excluir essa opção?"}
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                        <DialogContentText id="alert-dialog-description">
                                                                            Clique em Sim se você deseja excluir a opção selecionada
                                                                        </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                        <Button onClick={handleClose}>Cancelar</Button>
                                                                        <Button onClick={()=>{handleDeleteTreatmentForm(reasons.id)}} autoFocus>
                                                                            Sim
                                                                        </Button>
                                                                        </DialogActions>
                                                                    </Dialog>
                                                                    </span>
                                                                </TableCheckbox>
                                                                <th>{reasons.id}</th>
                                                                <th>{reasons.name}</th>
                                                                
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
        </>
    )
}

export default Reason;