import React, { ChangeEvent, useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { useToast } from "../../hooks/Toast";
import api from "../../services/apiClient";
import getValidationErrors from "../../utils/getValidationErrors";
import * as Yup from 'yup';

import Sidebar from '../../assets/components/AuthSidebar';
import TopBar from "../../assets/components/topBar";
import { AiOutlineUser } from "react-icons/ai";
import {  FiCamera, FiMail } from "react-icons/fi";
 
import {Container, SubContainer,  Content, MainContent, InfoContainer, ProfileContainer, ProfileCardContainer, ProfileInfoChangeContainer, ProfileCardStyles,
  ProfileCardContent, ProfileCardPadding, UploadAvatarButton, ProfileInfoChangeStyles, ProfileInfoChangeTitle, ProfileInfoCampsContainer, ProfileInfoCampsContent, ProfileButtonCamp } from './styles';
import ProfileInput from "../../assets/components/ProfileInput";
import Button from "../../assets/components/Button";
import { Form } from "@unform/web";

interface ProfileFormData {
  name: string;
  email: string;
}

const Profile: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();
    const token = localStorage.getItem('@Followup:token');

    const { user, updateUser } = useAuth();

    const handleSubmit = useCallback( async (data: ProfileFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite seu email'),
                
            });

            await schema.validate(data, {
                abortEarly: false,
              });

              const {name, email } = data;

              const formData = Object.assign({
                name,
                email,
                });
      
              const response = await api.put('/users', formData, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
              updateUser(response.data)
      
              
      
              addToast({
                type: 'success',
                title: 'Cadastro realizado!',
                description: 'Você já pode fazer seu logon no GoBarber!',
              });
            } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
      
                formRef.current?.setErrors(errors);
      
                return;
              }
      
              addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
              });
            }
          }
          , [addToast, updateUser,  token]
      );

      const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const data = new FormData();

          data.append('avatar', e.target.files[0])

          api.patch('/users/avatar', data).then(response => {
            updateUser(response.data);
          })
          
        }
      }, [updateUser]);
      
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
                              
                                <img src={user.avatar_url} alt={user.name} />
                              
                              <h2>{user.name}</h2>
                              
                            </ProfileCardContent>
                        </ProfileCardPadding>
                        <UploadAvatarButton>
                        <label htmlFor="avatar">
                          <FiCamera/>

                          <input type="file" id="avatar" onChange={handleAvatarChange} />
                        </label>
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
                        <Form ref={formRef}
                          initialData={{
                            name: user.name,
                            email: user.email,
                          }}
                          onSubmit={handleSubmit}>
                              <ProfileInfoCampsContent>
                                <ProfileInput name="name" icon={AiOutlineUser}  placeholder="Nome" />

                                <ProfileInput name="email" icon={FiMail} type="text" placeholder="E-mail" />
                              </ProfileInfoCampsContent>
                            <ProfileButtonCamp>
                              <Button type="submit">Confirmar</Button>
                            </ProfileButtonCamp>  
                        </Form>
                            </ProfileInfoCampsContainer>
                          <hr />
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