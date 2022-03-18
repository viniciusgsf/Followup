import { Button, Checkbox } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheck, FiCircle,  FiTrash2 } from "react-icons/fi";


import SideBar from '../../../assets/components/Sidebar';
import TopBar from "../../../assets/components/topBar";

import {Container, SubContainer, Content, MainContent, Bplan, Topside, BplanContent, BplanContentContainer, BplanInfo,
    ScrollbarBplan, BplanItens, BplanCheckbox, BplanBody, BplanButtons, BplanButtonsContent, BplanButtonsDiv
} from './styles';

const Nationalities: React.FC = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        <Container>
            <SubContainer>
                <Content>
                    <MainContent>
                        <Bplan>
                            <Topside>
                                <h4>Manter Nacionalidades</h4>
                            </Topside>
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

export default Nationalities;