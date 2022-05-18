import React, { useCallback,  useRef } from "react";
import * as Yup from 'yup';
import { Link, useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../utils/getValidationErrors";
import { Form } from "@unform/web";

import Input from "../../assets/components/input";
import CompButton from "../../assets/components/Button";
 
import { Container, Content, SMediaCamp, MailCamps, SigninContent, MailUtilsCamp } from './styles';
import { FiMail } from "react-icons/fi";
import api from "../../services/apiClient";
import { useToast } from "../../hooks/Toast";


interface ForgotPasswordFormData {
    email: string;

}

const ForgotPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();
    // const history = useHistory();

    const handleSubmit = useCallback( async (data: ForgotPasswordFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email('Digite seu email'),
            });
            console.log(data);
            await schema.validate(data, {
                abortEarly: false,       
              });
      
            await api.post('password/forgot', {
                email: data.email
            })

            addToast({
                 type: 'success',
                 title: 'Cadastro feito com sucesso!',
                 description: 'Voce ja pode realizar seu login'
            });
            // history.push('/signin');

            } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
              }
            }
            
          }
          , [addToast]
      );
    return (
        <Container>
        <Content>
                <SigninContent>
                    <SMediaCamp>          
                        <h4>Recuperação de senha</h4>
                        
                    </SMediaCamp>

                    <MailCamps>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        
                        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

                        <CompButton type="submit">Enviar</CompButton>
                        
                    </Form>
                        <MailUtilsCamp>
                        <p><Link to="signin">Voltar para login</Link></p>
                        </MailUtilsCamp>
                    </MailCamps>
                </SigninContent>
        </Content>
    </Container>
    )
};

export default ForgotPassword;