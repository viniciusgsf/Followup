import React, { useCallback,  useRef } from "react";
import * as Yup from 'yup';
import { Link, useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../utils/getValidationErrors";
import { Form } from "@unform/web";

import Input from "../../assets/components/input";
import Button from '@mui/material/Button';
import { FiFacebook, FiLock, FiMail} from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import CompButton from "../../assets/components/Button";
import PublicSidebar from "../../assets/components/PublicSidebar";
 
import { Container, Content, SMediaCamp, MailCamps, MediaButtons, Transition, SigninContent, MailUtilsCamp } from './styles';

import {  useAuth } from "../../hooks/AuthContext";

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn} = useAuth();
    const history = useHistory();

    const handleSubmit = useCallback( async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email('Digite seu email'),
                password: Yup.string().required( 'Senha obrigatório'),
            });
            console.log(data);
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await signIn({
                email: data.email,
                password: data.password,
            });

            history.push('/home');

            } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
            
          }
          , [signIn, history]
      );
    return (
        <Container>
        <PublicSidebar/>
        <Content>
                <SigninContent>
                    <SMediaCamp>          
                        <h4>Login</h4>
                        <p>Login na sua conta de usuário</p>

                        <MediaButtons>
                            <div>
                                <Button variant="outlined">
                                    <span>
                                        <FiFacebook/>
                                    </span>
                                    LogIn com Facebook
                                </Button>
                            </div>
                            <div>
                                <Button variant="outlined" color="error">
                                    <span>
                                        <AiOutlineGoogle/>
                                    </span>
                                    LogIn com Google
                                </Button>
                            </div> 
                        </MediaButtons>
                                  
                    </SMediaCamp>
                    <Transition>
                        <div>
                            <p>ou entrar com um endereço de e-mail</p>
                        </div>
                    </Transition>
                    <MailCamps>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        
                        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                        <CompButton type="submit">Entrar</CompButton>
                        
                    </Form>
                        <MailUtilsCamp>
                        <p>Não tem uma conta? Se inscreva <Link to="signup">Aqui</Link></p>
                        <p><Link to="forgot-password">Esqueci minha senha</Link></p>
                        </MailUtilsCamp>
                    </MailCamps>
                </SigninContent>
        </Content>
    </Container>
    )
};

export default SignIn;