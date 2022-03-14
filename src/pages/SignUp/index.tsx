import React from "react";

import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi';
import HomemadeButton from "../../assets/components/Button";
 
import { Container, Content, Terms} from './styles';
import Input from "../../assets/components/input";
import { Checkbox } from "@mui/material";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUp: React.FC = () => (
    <Container>
        <Content>
                <a href="/dashboard">
                    <span>
                    <FiArrowLeft/>
                    </span>
                    Voltar para Dashboard
                </a>


                    <form>   
                    <h1>Faça seu Cadastro</h1>
                    <p>Use seu e-mail para criar um novo cadastro</p>

                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                        <Input name="confirm-password" icon={FiLock} type="password" placeholder="Confirmar Senha" />
                        
                        <Terms>
                            
                            <p><Checkbox {...label} />Já li e aceitei os <a href="termos">termos e condições</a></p>

                        </Terms> 

                            <HomemadeButton type="submit">Cadastrar</HomemadeButton>
                            <p>Já tem uma conta?<a href="Login"> Faça seu Login</a></p> 
                            
                    </form>

        </Content>
    </Container>
);

export default SignUp;