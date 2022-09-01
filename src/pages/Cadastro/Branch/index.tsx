import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiCheck, FiCircle } from "react-icons/fi";
import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";
import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv
} from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { FormHandles } from "@unform/core";
import * as Yup from 'yup'; 
import api from "../../../services/apiClient";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import getValidationErrors from "../../../utils/getValidationErrors";
import { Dialogbox } from "../Countries/styles";


interface IBranch {
    id: string;
    name: string;
}
 

const Branch: React.FC = () => {
    
    const [branch, setBranch] = useState<IBranch[]>([]);
    const [branches, setBranches] = React.useState<IBranch>();
    
    const [loading, setLoading] = useState(true);
    
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    
    const [segments, setSegments] = useState<IBranch[]>([]);
    const [segment, setSegment] = React.useState('');
    
    const formRef = useRef<FormHandles>(null);
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

    const handleSubmit = useCallback( async (data: IBranch) => {
        
        try {
            
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),              
            });
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.patch('/branch', data);
            setOpenUpdate(false);
            
        } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
      }, []);

    const handleClickOpen = (nationalities:IBranch) => {
        setBranches(nationalities)
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleClickUpdateOpen = (nationalities:IBranch) => {        
        setBranches(nationalities)
        setOpenUpdate(true);
      };
    
    const handleUpdateClose = () => {
        setOpenUpdate(false);
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
                                                                        <DeleteIcon onClick={() => {handleClickOpen(branches)}} />                                                                                                                                       
                                                                        <EditIcon onClick={() => {handleClickUpdateOpen(branches)}}/>
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
                    Edite os dados relacionado a {branches?.name}
                </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <span>                                        
                    <Form ref={formRef} onSubmit={handleSubmit}>   
                        <Input name="name"  defaultValue={branches?.name} placeholder="Digite o país..." />  
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
                    Clique em Sim se você deseja excluir {branches?.name}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Form ref={formRef} onSubmit={handleDeleteBranch}>   
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

export default Branch;