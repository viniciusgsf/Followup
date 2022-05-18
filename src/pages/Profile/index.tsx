import React from "react";

import CompButton from "../../assets/components/Button";
import Sidebar from '../../assets/components/AuthSidebar';
import TopBar from "../../assets/components/topBar";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { FiGlobe, FiMail } from "react-icons/fi";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
 
import {Container, SubContainer,  Content, MainContent, InfoContainer, ProfileContainer, ProfileCardContainer, ProfileInfoChangeContainer, ProfileCardStyles,
  ProfileCardContent, ProfileCardPadding, UploadAvatarButton, ProfileInfoChangeStyles, ProfileInfoChangeTitle, ProfileInfoCampsContainer, ProfileInfoCampsContent,
  DropdownStateInput, ProfileButtonCamp } from './styles';
import ProfileInput from "../../assets/components/ProfileInput";
import Button from "../../assets/components/Button";


const Profile: React.FC = () => {
    
  const [state, seState] = React.useState('');

  const handleStateChange = (event: SelectChangeEvent) => {
    seState(event.target.value as string);
  };

    return (
    <>
        <TopBar/>
        <Sidebar/>
        <Container>
          <SubContainer>
            <Content>
              <MainContent>
                <InfoContainer>
                  <h4>Perfil</h4>
                  <ProfileContainer>
                    <ProfileCardContainer>
                      <ProfileCardStyles>
                        <ProfileCardPadding>
                            <ProfileCardContent>
                              <div>
                                <img src="https://i.pravatar.cc/300" alt="" />
                              </div>
                              <h5>João Paulo</h5>
                              <p>Rio de Janeiro</p>
                              <p>RJ</p>
                            </ProfileCardContent>
                        </ProfileCardPadding>
                        <UploadAvatarButton>
                              <CompButton>Enviar Foto</CompButton>
                        </UploadAvatarButton>
                        </ProfileCardStyles>
                    </ProfileCardContainer>
                    <ProfileInfoChangeContainer>
                      <ProfileInfoChangeStyles>
                        <ProfileInfoChangeTitle>
                          <div>
                            <span>Dados pessoais</span>
                            <span className="subtitle">Seus dados podem ser editados aqui.</span>
                          </div>
                        </ProfileInfoChangeTitle>
                        <hr />
                        <ProfileInfoCampsContainer>
                          <ProfileInfoCampsContent>
                            <ProfileInput name="name" icon={AiOutlineUser} type="text" placeholder="Nome" />
                            <ProfileInput name="usename" icon={AiOutlineUser} type="text" placeholder="Nome de usuario" />
                            <ProfileInput name="email" icon={FiMail} type="text" placeholder="E-mail" />
                            <ProfileInput name="phone" icon={AiOutlinePhone} type="tel" placeholder="Telefone" />
                            <ProfileInput name="country" icon={FiGlobe} type="text" placeholder="País" />
                            <DropdownStateInput>
                              <Box sx={{ minWidth: 120 }}>
                                  <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                      <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={state}
                                      label="Prioridade"
                                      onChange={handleStateChange}
                                      >
                                      <MenuItem value={10}>São Paulo</MenuItem>
                                      <MenuItem value={20}>Rio de Janeiro</MenuItem>
                                      <MenuItem value={30}>Minas Gerais</MenuItem>
                                      </Select>
                                  </FormControl>
                              </Box>
                            </DropdownStateInput>
                          </ProfileInfoCampsContent>
                        </ProfileInfoCampsContainer>
                        <hr />
                        <ProfileButtonCamp>
                          <Button>Confirmar</Button>
                        </ProfileButtonCamp>
                      </ProfileInfoChangeStyles>
                    </ProfileInfoChangeContainer>
                  </ProfileContainer>
                </InfoContainer>
              </MainContent>
            </Content>
          </SubContainer>
        </Container>
        
    </>
    )
};

export default Profile;