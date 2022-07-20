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
interface IJobFunction {
    id: string;
    name: string;
}
 

const JobFunctions: React.FC = () => {

    const [jobFunction, setJobFunction] = useState<IJobFunction[]>([])
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        async function fetchMyAPI() {        
        let response = await api.get<IJobFunction[]>("JobFunction")        

        setJobFunction(response.data)
        setLoading(false);  
    }

    fetchMyAPI()
    }, [])

    const handleCreate = () => {
        history.push('/jobFunctions/add')
    }

    
    const handleDeleteJobFunction= async (jobFunction:string) => {
       
        await api.delete(`/JobFunction/${jobFunction}`)
        let response = await api.get<IJobFunction[]>("JobFunction")
        setJobFunction(response.data)
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
                                <h4>Tipos de Função</h4>
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
                                                        <th>Tipo de função</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                    <tr>
                                                       
                                                    </tr>
                                                    { jobFunction.map(JobFunctions => {
                                                        return (
                                                            <tr key={JobFunctions.id}>
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
                                                                        {"Tem certeza que quer excluir essa função?"}
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                        <DialogContentText id="alert-dialog-description">
                                                                            Clique em Sim se você deseja excluir a função selecionado
                                                                        </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                        <Button onClick={handleClose}>Cancelar</Button>
                                                                        <Button onClick={()=>{handleDeleteJobFunction(JobFunctions.id)}} autoFocus>
                                                                            Sim
                                                                        </Button>
                                                                        </DialogActions>
                                                                    </Dialog>
                                                                    </span>
                                                                </TableCheckbox>
                                                                <th>{JobFunctions.id}</th>
                                                                <th>{JobFunctions.name}</th>
                                                                
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

export default JobFunctions;