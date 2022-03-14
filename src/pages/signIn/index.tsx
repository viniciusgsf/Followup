import React from "react";
import Button from '@mui/material/Button';
import {FiArrowLeft, FiFacebook, FiLock, FiMail} from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import HomemadeButton from "../../assets/components/Button";
 
import { Container, Content, SMediaCamp, MailCamps, MediaButtons, Transition } from './styles';
import Input from "../../assets/components/input";




const SignIn: React.FC = () => (
    <Container>
        <Content>
                <a href="/Dashboard">
                    <span>
                    <FiArrowLeft/>
                    </span>
                    Dashboard
                </a>
                <form action="">
                    <SMediaCamp>          
                        <h4>Sign In</h4>
                        <p>Sign in na sua conta de usuário</p>

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
                    <form>
                        
                        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                        <HomemadeButton type="submit">Entrar</HomemadeButton>
                        
                    </form>

                    <p>Não tem uma conta? Se inscreva <a href="placeholder">Aqui</a></p>
                    </MailCamps>
                </form>
        </Content>
    </Container>
);

export default SignIn;