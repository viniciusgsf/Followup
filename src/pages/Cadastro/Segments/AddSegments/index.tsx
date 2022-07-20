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
import { FiChevronRight } from "react-icons/fi";

interface CountryFormData {
  name: string;  
}

const AddSegments: React.FC = () => {
  const history = useHistory();
  const [isSaved, setIsSaved] = useState(false);


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSaved(false);
    
  };

  const formRef = useRef<FormHandles>(null);
    // const { addToast } = useToast();
    const handleSubmit = useCallback( async (data: CountryFormData) => {
      try {
          formRef.current?.setErrors({});
          const schema = Yup.object().shape({
              name: Yup.string().required('Campo obrigatório'),              
          });
          await schema.validate(data, {
              abortEarly: false,       
            });
    
          await api.post('/Segment', data);
          setIsSaved(true)
          history.push('/segments')
      } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
              formRef.current?.setErrors(errors);
              return;
            }
          }
    }, [history]);
    
    
    return (
      <>
        <Container>
          <SubContainer>
            <Content>
              <MainContent>
                <TopContent>
                  <Topside>
                    <h4>Cadastrar Segmento</h4>
                    <Link to="/segments">
                      <h2>Voltar</h2>
                    </Link>
                  </Topside>
                  <BottomSide>
                    <BottomContainer>
                      <Form ref={formRef} onSubmit={handleSubmit}>                           

                        <Input name="name" icon={FiChevronRight} placeholder="Digite o tipo de segmento..." />                       

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
          Segmento gravado com sucesso.
        </Alert>
      </Snackbar>
      </>
    )
}

export default AddSegments;