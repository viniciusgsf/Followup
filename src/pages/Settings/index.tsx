import React, { useCallback, useRef } from "react";
import * as Yup from 'yup';
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import Sidebar from '../../assets/components/AuthSidebar';
import TopBar from "../../assets/components/topBar";
import { AiFillLock,  } from "react-icons/ai";
 
import {Container, SubContainer,  Content, MainContent, InfoContainer, ProfileContainer, ProfileInfoChangeContainer,  ProfileInfoChangeStyles, ProfileInfoChangeTitle, ProfileInfoCampsContainer, ProfileInfoCampsContent,
 ProfileButtonCamp } from './styles';
import ProfileInput from "../../assets/components/ProfileInput";
import CompButton from "../../assets/components/Button";
import getValidationErrors from "../../utils/getValidationErrors";

interface ProfileFormData {
    old_password: string;
    password: string;
    password_confirmation: string;
}

const Settings: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  //const { user, updateUser } = useAuth();

    const handlePasswordSubmit = useCallback( async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
            old_password: Yup.string(),
            password: Yup.string().when('old_password', {
              is: (val: { lenght: any; }) => !!val.lenght,
              then: Yup.string().required('Campo obrigatorio'),
              otherwise: Yup.string(),
            }),
            password_confirmation: Yup.string().when('password', {
              is: (val: { lenght: any; }) => !!val.lenght,
              then: Yup.string().required('Campo obrigatorio'),
              otherwise: Yup.string(),
            }).oneOf([Yup.ref('password'), null], 'Passwords must match'),
        });
        await schema.validate(data, {
            abortEarly: false,       
          });

        //const response await api.put('/profile', data);

        // updateUser(response.data);

        // history.push('/home');

        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
            return;
          }
       
        }
      }, []);
    return (
    <>
        <TopBar/>
        <Sidebar/>
        <Container>
          <SubContainer>
            <Content>
              <MainContent>
                <InfoContainer>
                  <h4>Configurações</h4>
                  <ProfileContainer>
                    <ProfileInfoChangeContainer>
                      <ProfileInfoChangeStyles>
                        <Form ref={formRef} onSubmit={handlePasswordSubmit}>
                          <ProfileInfoChangeTitle>
                            <div>
                              <span>Senha</span>
                              <span className="subtitle">Atualizar Senha</span>
                            </div>
                          </ProfileInfoChangeTitle>
                          <hr />
                          <ProfileInfoCampsContainer>
                            <ProfileInfoCampsContent>
                              <ProfileInput name="old_password" icon={AiFillLock} type="password" placeholder="Senha antiga" />
                              <ProfileInput name="password" icon={AiFillLock} type="password" placeholder="Nova senha" />
                              <ProfileInput name="password_confirmation" icon={AiFillLock} type="password" placeholder="Confirmar Senha" />
                          
                            </ProfileInfoCampsContent>
                          </ProfileInfoCampsContainer>
                          <hr />
                          <ProfileButtonCamp>
                            <CompButton type="submit">Atualizar</CompButton>
                          </ProfileButtonCamp>
                        </Form>
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

export default Settings;