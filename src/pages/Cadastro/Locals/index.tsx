import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle, FiSearch, FiTrash2 } from "react-icons/fi";

import Input from "../../../assets/components/input";


import SideBar from '../../../assets/components/Sidebar';
import TopBar from "../../../assets/components/topBar";

import {Container, SubContainer, Content, MainContent, Bplan, Topside, BottomSide, BottomContainer , BottomInputs, ButtonDiv, BplanContent, BplanContentContainer, BplanInfo,
    ScrollbarBplan, BplanItens, BplanCheckbox, BplanBody, BplanButtons, BplanButtonsContent, BplanButtonsDiv
} from './styles';

const Locals: React.FC = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [font, setFont] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    setFont(event.target.value as string);
    }
    return (
        <>
        <Container>
            <SubContainer>
                <Content>
                    <MainContent>
                        <Bplan>
                            <Topside>
                                <h4>Cadastro de Localidades</h4>
                            </Topside>
                            <BottomSide>
                                <BottomContainer>
                                    <BottomInputs>
                                        <label>
                                            <ButtonDiv>
                                            <Input name="businessplan" icon={FiSearch} type="text" placeholder="Segmentos"/>
                                            </ButtonDiv>    
                                            <Box>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">UF</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select" 
                                                value={font}
                                                label="{UF}"
                                                onChange={handleChange}
                                                >
                                                <MenuItem value={10}>Todos</MenuItem>
                                                <MenuItem value={20}>placeholder</MenuItem>
                                                <MenuItem value={30}>Placeholder</MenuItem>
                                                </Select>
                                            </FormControl>
                                            </Box>
                                        </label>
                                    </BottomInputs>
                                </BottomContainer>
                            </BottomSide>
                        </Bplan>
                        <BplanContent>
                            <BplanContentContainer>
                                <BplanInfo> 
                                    <ScrollbarBplan>
                                        <BplanItens>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <BplanCheckbox>
                                                            <span>
                                                                <Checkbox {...label} />
                                                            </span>
                                                        </BplanCheckbox>
                                                        <th>Nome</th>
                                                        <th>UF</th>
                                                    </tr>
                                                </thead>
                                                <BplanBody>
                                                        <tr>
                                                            <BplanCheckbox>
                                                                <span>
                                                                    <Checkbox {...label} />
                                                                </span>
                                                            </BplanCheckbox>
                                                            <th>São Paulo</th>
                                                            <th>SP</th>
                                                            
                                                        </tr> 
                                                          
                                                </BplanBody>
                                            </table>
                                        </BplanItens>
                                    </ScrollbarBplan>
                                    <BplanButtons>
                                        <BplanButtonsContent>
                                            <BplanButtonsDiv>
                                                <Button variant="contained">Incluir</Button>
                                            </BplanButtonsDiv>
                                            <BplanButtonsDiv>
                                                <Button variant="contained"><FiTrash2/>Excluir</Button>
                                            </BplanButtonsDiv>
                                            <BplanButtonsDiv>
                                                <Button variant="contained"><FiCheck/>Confirmar</Button>
                                            </BplanButtonsDiv>
                                            <BplanButtonsDiv>
                                                <Button variant="contained"><FiCircle/>Renovar</Button>
                                            </BplanButtonsDiv>
                                            <BplanButtonsDiv>
                                                <Button variant="contained"><AiOutlineClose/>Fechar</Button>
                                            </BplanButtonsDiv>
                                        </BplanButtonsContent>
                                    </BplanButtons>
                                </BplanInfo>
                            </BplanContentContainer>
                        </BplanContent>
                    </MainContent>
                </Content>
            </SubContainer>
        </Container>
        <SideBar />
        <TopBar/>
        </>
    )
}

export default Locals;