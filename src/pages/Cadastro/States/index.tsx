import { Button, Checkbox } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle, FiSearch, FiTrash2 } from "react-icons/fi";

import Input from "../../../assets/components/input";


import SideBar from '../../../assets/components/Sidebar';
import TopBar from "../../../assets/components/topBar";

import {Container, SubContainer, Content, MainContent, Bplan, Topside, BottomSide, BottomContainer , BottomInputs, ButtonDiv, BplanContent, BplanContentContainer, BplanInfo,
    ScrollbarBplan, BplanItens, BplanCheckbox, BplanBody, BplanButtons, BplanButtonsContent, BplanButtonsDiv
} from './styles';

const States: React.FC = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        <Container>
            <SubContainer>
                <Content>
                    <MainContent>
                        <Bplan>
                            <Topside>
                                <h4>Cadastro de estados</h4>
                            </Topside>
                            <BottomSide>
                                <BottomContainer>
                                    <BottomInputs>
                                        <label>
                                            <ButtonDiv>
                                            <Input name="businessplan" icon={FiSearch} type="text" placeholder="UF"/>
                                            </ButtonDiv>    
                                            <ButtonDiv>
                                            <Input name="description" icon={FiSearch} type="text" placeholder="Nome"/>
                                            </ButtonDiv>
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
                                                        <th>UF</th>
                                                        <th>Nome</th>
                                                        <th>Nome do País</th>
                                                    </tr>
                                                </thead>
                                                <BplanBody>
                                                        <tr>
                                                            <BplanCheckbox>
                                                                <span>
                                                                    <Checkbox {...label} />
                                                                </span>
                                                            </BplanCheckbox>
                                                            <th>SP</th>
                                                            <th>São Paulo</th>
                                                            <th>Brasil</th>
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

export default States;