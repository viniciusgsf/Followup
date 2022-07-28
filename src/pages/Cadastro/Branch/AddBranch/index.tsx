import React, { useCallback, useEffect, useRef, useState} from "react";
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
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

interface SegmentFormData {
  name: string; 
  segment_id: string;
}

interface IStates {
  id: string;
  name: string;
}

const AddBranch: React.FC = () => {
  const history = useHistory();
  const [isSaved, setIsSaved] = useState(false);

  const [segments, setSegments] = useState<IStates[]>([]);
  const [segment, setSegment] = React.useState('');
  
  useEffect(() => {
    getSegment();
  }, []);

  const getSegment = async () => {
    
    const resp = await api.get(`/Segment`);
    const respData = resp.data;
    setSegments(respData);
    setSegment(respData[0].id);
    
  }

  const handleSegmentChange = (event: SelectChangeEvent) => {        
    setSegment(event.target.value as string);
  }; 
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSaved(false);
    
  };

  const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback( async (data: SegmentFormData) => {
      data.segment_id = segment;

      try {
          formRef.current?.setErrors({});
          const schema = Yup.object().shape({
              name: Yup.string().required('Campo obrigatório'),              
          });
          await schema.validate(data, {
              abortEarly: false,       
            });
    
          await api.post('/branch', data);
          setIsSaved(true)
          history.push('/branch')
      } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
              formRef.current?.setErrors(errors);
              return;
            }
          }
    }, [history, segment]);
    
    
    return (
      <>
        <Container>
          <SubContainer>
            <Content>
              <MainContent>
                <TopContent>
                  <Topside>
                    <h4>Cadastrar Ramo</h4>
                    <Link to="/branch">
                      <h2>Voltar</h2>
                    </Link>
                  </Topside>
                  <BottomSide>
                    <BottomContainer>
                      <Form ref={formRef} onSubmit={handleSubmit}>                           

                        <Input name="name" placeholder="Digite o ramo..." />        

                        <Box sx={{ minWidth: 120 }} mt={1}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Segmento</InputLabel>
                            {/* {locations.length > 0 && */}
                            <Select
                              name="location_id"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Segmento"
                              onChange={handleSegmentChange}
                            >

                              {segments.map((segment) => {
                                return (
                                  <MenuItem key={segment.id} value={segment.id}>{segment.name}</MenuItem>
                                )
                              } )}
      
                            </Select>
                            {/* } */}
                          </FormControl>
                        </Box>                

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
          ramo gravada com sucesso.
        </Alert>
      </Snackbar>
      </>
    )
}

export default AddBranch;