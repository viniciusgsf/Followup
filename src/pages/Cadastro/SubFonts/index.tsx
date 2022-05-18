import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle, FiSearch, FiTrash2 } from "react-icons/fi";

import SearchInput from "../../../assets/components/SearchInput";


import SideBar from '../../../assets/components/AuthSidebar';
import TopBar from "../../../assets/components/topBar";

import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer , BottomInputs, ButtonDiv, BottomContent, ContentContainer, ContentInfo,
    TableScrollbar, TableItens, TableCheckbox, TableBody, InteractiveButtons, InteractiveButtonsContent, InteractiveButtonsDiv
} from './styles';

const SubFonts: React.FC = () => {
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
                        <TopContent>
                            <Topside>
                                <h4>Manter sub-fontes</h4>
                            </Topside>
                            <BottomSide>
                                <BottomContainer>
                                    <BottomInputs>
                                    <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Fontes</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select" 
                                        value={font}
                                        label="Fontes"
                                        onChange={handleChange}
                                        >
                                        <MenuItem value={10}>Todos</MenuItem>
                                        <MenuItem value={20}>Cantor Sertanejo</MenuItem>
                                        <MenuItem value={30}>Textinho no Twitter</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Box>
                                        <label>
                                            <ButtonDiv>
                                            <SearchInput name="businessplan" icon={FiSearch} type="text" placeholder="Segmentos"/>
                                            </ButtonDiv>    
                                            <ButtonDiv>
                                            <SearchInput name="description" icon={FiSearch} type="text" placeholder="Descrição"/>
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
                                        <TableItens>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <TableCheckbox>
                                                            <span>
                                                                <Checkbox {...label} />
                                                            </span>
                                                        </TableCheckbox>
                                                        <th>Sub-fonte</th>
                                                        <th>Descrição Sub-fonte</th>
                                                        <th>Fonte</th>
                                                        <th>Descrição</th>
                                                    </tr>
                                                </thead>
                                                <TableBody>
                                                        <tr>
                                                            <TableCheckbox>
                                                                <span>
                                                                    <Checkbox {...label} />
                                                                </span>
                                                            </TableCheckbox>
                                                            <th>131</th>
                                                            <th>Descrição placeholder</th>
                                                            <th>10</th>
                                                            <th>Descrição placeholder</th>
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
                    </MainContent>
                </Content>
            </SubContainer>
        </Container>
        <SideBar />
        <TopBar/>
        </>
    )
}

export default SubFonts;