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

interface PublicPlaceFormData {
  name: string;  
  publicplace: string;
  district: string;
  local: string;
  cep: number;
}

const AddPublicPlace: React.FC = () => {
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
    const handleSubmit = useCallback( async (data: PublicPlaceFormData) => {
      try {
          formRef.current?.setErrors({});
          const schema = Yup.object().shape({
              name: Yup.string().required('Nome obrigatório'),
              publicplace: Yup.string().required('Logradouro obrigatório'), 
              district: Yup.string().required('Bairro obrigatório'), 
              local: Yup.string().required(), 
              cep: Yup.string().required('CEP obrigatório'),           
          });
          await schema.validate(data, {
              abortEarly: false,       
            });
    
          await api.post('/publicplaces', data);
          setIsSaved(true)
          history.push('/publicplaces')
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
                    <h4>Países</h4>
                    <Link to="/publicPlace">
                      <h2>Voltar</h2>
                    </Link>
                  </Topside>
                  <BottomSide>
                    <BottomContainer>
                      <Form ref={formRef} onSubmit={handleSubmit}>                           

                        <Input name="type" icon={FiChevronRight} placeholder="Tipo" /> 
                        <Input name="publicplace" icon={FiChevronRight} placeholder="Logradouro" />
                        <Input name="district" icon={FiChevronRight} placeholder="Bairro" />
                        <Input name="local" icon={FiChevronRight} placeholder="Localidade" />
                        <Input name="cep" icon={FiChevronRight} placeholder="CEP" />                      

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
          Logradouro gravado com sucesso.
        </Alert>
      </Snackbar>
      </>
    )
}

export default AddPublicPlace;