import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiCheck, FiCircle } from "react-icons/fi";
import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";
import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv
} from './styles';
import api from "../../../services/apiClient";
import { useHistory } from "react-router-dom";

import DeleteIcon from '@mui/icons-material/Delete';
interface IBranch {
    id: string;
    name: string;
}
 

const Branch: React.FC = () => {

    const [branch, setBranch] = useState<IBranch[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const [segments, setSegments] = useState<IBranch[]>([]);
    const [segment, setSegment] = React.useState('');

    const history = useHistory();
    
    useEffect(() => {
        async function fetchMyAPI() {        
            getSegment();
            if(segment){               
                setLoading(false);  
            }            
        }
        fetchMyAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => { 
        getBranches(segment);
     }, [segment])


    const handleCreate = () => {
        history.push('/branch/add')
    }

    const getSegment = async () => {
    
        const resp = await api.get(`/Segment`);
        const respData = resp.data;
        setSegments(respData);
        setSegment(respData[0].id);
        
      }

    const getBranches = async (segment: string) => {
        if(segment){
        const resp = await api.get(`/branch/${segment}`);
        const respData = resp.data;
        setBranch(respData);
        setLoading(false);
        }
    }

    
    const handleDeleteBranch= async (situation:string) => {
       
        await api.delete(`/branch/${situation}`)
        let response = await api.get<IBranch[]>("branch")
        setBranch(response.data)
        setLoading(false);
        setOpen(false);
         
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleSegmentChange = (event: SelectChangeEvent) => {        
        setSegment(event.target.value as string);
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
                                <h4>Ramos</h4>
                            </Topside>
                            <BottomSide>
                                <BottomContainer>
                                    <BottomInputs>
                                        <label>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Segmento</InputLabel>
                                                    {segments.length > 0 &&
                                                    <Select
                                                    name="country_id"
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    defaultValue={segments[0].id}
                                                    label="País"
                                                    onChange={handleSegmentChange}
                                                    >

                                                    {segments.map((segment) => {
                                                        return (
                                                        <MenuItem key={segment.id} value={segment.id}>{segment.name}</MenuItem>
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
                                                        <th>Estado dos Ramos</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                    <tr>
                                                       
                                                    </tr>
                                                    { branch.map(branches => {
                                                        return (
                                                            <tr key={branches.id}>
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
                                                                        {"Tem certeza que quer excluir esse ramo?"}
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                        <DialogContentText id="alert-dialog-description">
                                                                            Clique em Sim se você deseja excluir o ramo selecionado
                                                                        </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                        <Button onClick={handleClose}>Cancelar</Button>
                                                                        <Button onClick={()=>{handleDeleteBranch(branches.id)}} autoFocus>
                                                                            Sim
                                                                        </Button>
                                                                        </DialogActions>
                                                                    </Dialog>
                                                                    </span>
                                                                </TableCheckbox>
                                                                <th>{branches.id}</th>
                                                                <th>{branches.name}</th>
                                                                
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

export default Branch;