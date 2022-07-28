import React, { useCallback, useRef, useState} from "react";
import SideBar from '../../../../assets/components/AuthSidebar';
import TopBar from "../../../../assets/components/topBar";
import {Container, SubContainer, Content, MainContent, TopContent, Topside, BottomSide, BottomContainer } from './styles';
import api from "../../../../services/apiClient";
import CompButton from "../../../../assets/components/Button";
import { Form } from '@unform/web';
import * as Yup from 'yup'; 
import { FormHandles } from "@unform/core";
import Input from "../../../../assets/components/input";
import getValidationErrors from "../../../../utils/getValidationErrors";
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

interface CountryFormData {
  name: string;  
  hasObservation: boolean;
}

const AddPhoneTypes: React.FC = () => {
  const history = useHistory();
  const [isSaved, setIsSaved] = useState(false);


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSaved(false);
    
  };
  

  const formRef = useRef<FormHandles>(null);
  const hasObservation = document.getElementById('checkbox') as HTMLInputElement;

    const handleSubmit = useCallback( async (data: CountryFormData) => {
      try {
          formRef.current?.setErrors({});
          const schema = Yup.object().shape({
              name: Yup.string().required('Nome obrigatório'),   

          });
          await schema.validate(data, {
              abortEarly: false,       
            });

          if (hasObservation != null) {
            hasObservation.checked = true
          };
    
          await api.post('/FoneTypes', data);
          setIsSaved(true)

          history.push('/phoneTypes')

        

      } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
              formRef.current?.setErrors(errors);
              return;
            }
          }
    }, [hasObservation, history]);
    
    
    return (
      <>
        <Container>
          <SubContainer>
            <Content>
              <MainContent>
                <TopContent>
                  <Topside>
                    <h4>Cadastrar tipo de telefone</h4>
                    <Link to="/phoneTypes">
                      <h2>Voltar</h2>
                    </Link>
                  </Topside>
                  <BottomSide>
                    <BottomContainer >
                      <Form ref={formRef} onSubmit={handleSubmit}>                           

                        <Input name="name"  placeholder="Digite o tipo de telefone..." />   

                        <p>Observação? 
                          <input type="checkbox" id="checkbox" className="checkbox"/> 
                        </p>                   

                        <CompButton type="submit">Cadastrar</CompButton>                       

                      </Form>
                    </BottomContainer>
                  </BottomSide>
                </TopContent>
              </MainContent>
            </Content>
          </SubContainer>
        </Container>
        <SideBar />
        <TopBar/>
        <Snackbar open={isSaved} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Tipo de telefone gravado com sucesso.
        </Alert>
      </Snackbar>
      </>
    )
}

export default AddPhoneTypes;