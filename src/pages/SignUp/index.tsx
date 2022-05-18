import React, { useCallback, useRef } from "react";
import { Form } from '@unform/web';
import * as Yup from 'yup'; 
import { Link } from "react-router-dom";
import { FormHandles } from "@unform/core";

import api from "../../services/apiClient";
import getValidationErrors from "../../utils/getValidationErrors";

import { FiLock, FiMail, FiUser} from 'react-icons/fi';
import CompButton from "../../assets/components/Button";
import { Container, Content, Terms} from './styles';
import Input from "../../assets/components/input";
import PublicSidebar from "../../assets/components/PublicSidebar";
// import { useToast } from '../../hooks/Toast';

interface SignUpFormData {
    name: string;
    username: string;
    email: string;
    password: string;
}

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    // const { addToast } = useToast();
    const handleSubmit = useCallback( async (data: SignUpFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                username: Yup.string().required('Nome de usuário obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite seu email'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.post('/users', data);

            

            // addToast({
            //     type: 'success',
            //     title: 'Cadastro feito com sucesso!',
            //     description: 'Voce ja pode realizar seu login'
            // });

            } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            //   addToast({
            //     type: 'error',
            //     title: 'Erro no cadastro',
            //     description: 'Ocorreu um erro ao realizar o cadastro, tente novamente'
            // });
            }
          }, []);

    return (
        <Container>
        <PublicSidebar/>
        <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>   
                    <h1>Faça seu Cadastro</h1>
                    <p>Use seu e-mail para criar um novo cadastro</p>

                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input name="username" icon={FiUser} placeholder="Nome de usuario" />
                        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                        
                        <Terms>
                            
                            {/* <p><Checkbox {...label} />Já li e aceitei os <a href="termos">termos e condições</a></p> */}

                        </Terms> 

                            <CompButton type="submit">Cadastrar</CompButton>
                            <p>Já tem uma conta?<Link to="signin"> Faça seu Login</Link></p> 
                            
                    </Form>

            </Content>
        </Container>
    );
};

export default SignUp;