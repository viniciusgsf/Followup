import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TableBody } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle, FiSearch, FiTrash2 } from "react-icons/fi";

import SideBar from '../../assets/components/AuthSidebar';
import SearchInput from "../../assets/components/SearchInput";
import TopBar from "../../assets/components/topBar";

import {Container, SubContainer, Content, GridContainer, Topside, FollowupContainer, ProspectInputs, ButtonDiv, DateInputs, DateContainer,
    ProgressContainer, ProgressSelection, BplanContainer, BplanSelection, InteractiveButtonsDiv, InteractiveButtonsContent, InteractiveButtons,
     ContentInfo, ContentContainer, BottomContent, TableScrollbar, TableItens, TableCheckbox} from './styles';

const Homepage:React.FC = ( ) => {  
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [peogress, setProgress] = React.useState('');

    const handleProgressChange = (event: SelectChangeEvent) => {
        setProgress(event.target.value as string);
    };
    
    const [priority, setPriority] = React.useState('');

    const handlePriorityChange = (event: SelectChangeEvent) => {
        setPriority(event.target.value as string);
    };

    const [local, setLocal] = React.useState('');

    const handleLocalChange = (event: SelectChangeEvent) => {
        setLocal(event.target.value as string);
    };

    const [bplan, setBplan] = React.useState('');

    const handleBplanChange = (event: SelectChangeEvent) => {
        setBplan(event.target.value as string);
    };

    return (<>
        <SideBar/>
        <TopBar/>
        <Container>
            <SubContainer>
                <Content>
                    <GridContainer>
                        <Topside>
                            <h4>Followup</h4>
                        </Topside>
                        <FollowupContainer>
                                <ProspectInputs>
                                    <label>
                                        <ButtonDiv>
                                        <SearchInput name="businessplan" icon={FiSearch} type="text" placeholder="Prospecto"/>
                                        </ButtonDiv>    
                                        <ButtonDiv>
                                        <SearchInput name="description" icon={FiSearch} type="text"/>
                                        </ButtonDiv>
                                    </label>
                                </ProspectInputs>
                                <DateInputs>
                                    <DateContainer>
                                        <ButtonDiv>
                                            <span>
                                                <p>Período</p>
                                            </span>
                                        <SearchInput name="businessplan" icon={AiOutlineCalendar} type="text" placeholder="..."/>
                                        </ButtonDiv>    
                                        <ButtonDiv>
                                        <SearchInput name="description" icon={AiOutlineCalendar} type="text" placeholder="..."/>
                                            <span>
                                                <Checkbox />
                                                <p>Qualquer</p>
                                            </span>
                                        </ButtonDiv>
                                    </DateContainer>
                                    <DateContainer>
                                        <ButtonDiv>
                                            <span>
                                                <p>Data Futura</p>
                                            </span>
                                        <SearchInput name="businessplan" icon={AiOutlineCalendar} type="text" placeholder="..."/>
                                        </ButtonDiv>    
                                        <ButtonDiv>
                                        <SearchInput name="description" icon={AiOutlineCalendar} type="text" placeholder="..."/>
                                            <span>
                                                <Checkbox />
                                                <p>Qualquer</p>
                                            </span>
                                        </ButtonDiv>
                                           
                                    </DateContainer>
                                </DateInputs>
                                <DateInputs>
                                    <ProgressContainer>
                                        <ProgressSelection>
                                            
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Periodo</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={peogress}
                                                    label="Periodo"
                                                    onChange={handleProgressChange}
                                                    >
                                                    <MenuItem value={10}>Atendido</MenuItem>
                                                    <MenuItem value={20}>Pendente</MenuItem>
                                                    <MenuItem value={30}>Todos</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={priority}
                                                    label="Prioridade"
                                                    onChange={handlePriorityChange}
                                                    >
                                                    <MenuItem value={10}>Altas</MenuItem>
                                                    <MenuItem value={20}>Medias</MenuItem>
                                                    <MenuItem value={30}>Baixas</MenuItem>
                                                    <MenuItem value={40}>Todas</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Local</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={local}
                                                    label="Local"
                                                    onChange={handleLocalChange}
                                                    >
                                                    <MenuItem value={10}>Próprio</MenuItem>
                                                    <MenuItem value={20}>Parceiro</MenuItem>
                                                    <MenuItem value={30}>Externo</MenuItem>
                                                    <MenuItem value={40}>Qualquer</MenuItem>
                                                    <MenuItem value={50}>Todos</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        
                                        </ProgressSelection>
                                    </ProgressContainer>
                                    <BplanContainer>
                                        <BplanSelection>
                                           
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Planos de Negócio</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={bplan}
                                                    label="Prioridade"
                                                    onChange={handleBplanChange}
                                                    >
                                                    <MenuItem value={10}>Todos</MenuItem>
                                                    <MenuItem value={20}>Medias</MenuItem>
                                                    <MenuItem value={30}>Baixas</MenuItem>
                                                    <MenuItem value={40}>Todas</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </BplanSelection>
                                    </BplanContainer>
                                </DateInputs>
                        </FollowupContainer>
                        <BottomContent>
                            <ContentContainer>
                                <ContentInfo> 
                                    <TableScrollbar>
                                        <TableItens>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <TableCheckbox>
                                                            <span>
                                                                <Checkbox {...label} />
                                                            </span>
                                                        </TableCheckbox>
                                                        <th>Data futura</th>
                                                        <th>Hora futura</th>
                                                        <th>Sigla</th>
                                                        <th>Cod.</th>
                                                        <th>Nome/Razão social</th>
                                                        <th>Ação</th>
                                                        <th>Direto/indireto</th>
                                                        <th>Motivos</th>
                                                        <th>Observações </th>
                                                        <th>Meio de Contato</th>
                                                        <th>Andamento</th>
                                                        <th>Rel.</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                        <tr>
                                                            <TableCheckbox>
                                                                <span>
                                                                    <Checkbox {...label} />
                                                                </span>
                                                            </TableCheckbox>
                                                            <th> 100101</th>
                                                            <th>Descrição placeholder</th>
                                                            <th>Sigla placeholder</th><th>Cod.</th>
                                                            <th>placeholder</th>
                                                            <th>placeholder</th>
                                                            <th>placeholder</th>
                                                            <th>placeholder</th>
                                                            <th>placeholder </th>
                                                            <th>placeholder</th>
                                                            <th>placeholder</th>
                                                            <th>placeholder</th>
                                                        </tr> 
                                                          
                                                </TableBody>
                                            </table>
                                        </TableItens>
                                    </TableScrollbar>
                                    <InteractiveButtons>
                                        <InteractiveButtonsContent>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained">Incluir</Button>
                                            </InteractiveButtonsDiv>
                                            <InteractiveButtonsDiv>
                                                <Button variant="contained"><FiTrash2/>Excluir</Button>
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
                    </GridContainer>
                </Content>
            </SubContainer>
        </Container>
    </>)
    
};


export default Homepage;