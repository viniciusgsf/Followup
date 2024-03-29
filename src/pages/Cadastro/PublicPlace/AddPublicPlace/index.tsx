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


interface StateFormData {
  name: string;  
  id: string;
  country_id: string;
  state_id: string;
  location_id: string;
  district_id: string;
  publicPlaceType_id: string;
}

interface IStates {
  id: string;
  name: string;
}

interface Country {
  id: string;
  name: string;
}

const AddDistricts: React.FC = () => {
  
  const history = useHistory();

  const [isSaved, setIsSaved] = useState(false);

  const [paises, setPaises] = useState<Country[]>([]);
  const [country, setCountry] = React.useState('');

  const [states, setStates] = useState<IStates[]>([])
  const [state, setState] = React.useState('');

  const [locations, setLocations] = useState<IStates[]>([]);
  const [locationsList, setLocationsList] = React.useState('');

  const [districts, setDistricts] = useState<IStates[]>([]);
  const [district, setDistrict] = React.useState('');

  const [PPTypes, setPPTypes] = useState<IStates[]>([]);
  const [PPType, setPPType] = React.useState('');


  useEffect(() => {
    SetCountriesList();
  }, []);

  useEffect(() => {
    SetPPTypeList();
  }, []);
      
  useEffect(() => { 
    getStates(country);
  }, [country])

  useEffect(() => { 
    getLocations(state);
  }, [state])

  useEffect(() => { 
    getDistricts(locationsList);
  }, [locationsList])

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);

  };

  const handleStateChange = (event: { target: { value: string; }; }) => {
    setState(event.target.value as string);
  };

  const handleLocationChange = (event: SelectChangeEvent) => {        
    setLocationsList(event.target.value as string);
  }; 

const handleDistrictChange = (event: SelectChangeEvent) => {        
  setDistrict(event.target.value as string);
}; 

const handlePPTypeChange = (event: SelectChangeEvent) => {        
  setPPType(event.target.value as string);
}; 
  
  const SetCountriesList = async () => {
    
    const resp = await api.get(`/countries`);
    const respData = resp.data;
    setPaises(respData);
    setCountry(respData[0].id);
    
}

const getStates = async (country: string) => {
  if(country){
  const resp = await api.get(`/states/${country}`);
  const respData = resp.data;
  setStates(respData);
  }
}

const getLocations = async (state: string) => {
  if(state){
  const resp = await api.get(`/locations/${state}`);
  const respData = resp.data;
  setLocations(respData);
  }
}

const getDistricts = async (location: string) => {
  if(location){
  const resp = await api.get(`/districts/${location}`);
  const respData = resp.data;
  setDistricts(respData);
  }
}

const SetPPTypeList = async () => {
    
  const resp = await api.get(`/publicPlaceTypes`);
  const respData = resp.data;
  setPPTypes(respData);
  setPPType(respData[0].id);
  
}


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSaved(false);
    
  };

  const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback( async (data: StateFormData) => {
            
      data.country_id = country;
      data.state_id = state;
      data.location_id = locationsList;
      data.district_id = district;
      data.publicPlaceType_id = PPType;

      try {
          formRef.current?.setErrors({});
          const schema = Yup.object().shape({
              name: Yup.string().required('Nome obrigatório'),   
              country_id: Yup.string().required('Codigo obrigatório'),             
          });
          await schema.validate(data, {
              abortEarly: false,       
            });
    
          await api.post('/publicplaces', data);
          setIsSaved(true)
          history.push('/publicPlace')
      } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
              formRef.current?.setErrors(errors);
              return;
            }
          }
    }, [PPType, country, district, history, locationsList, state]);
    
    
    return (
      <>
        <Container>
          <SubContainer>
            <Content>
              <MainContent>
                <TopContent>
                  <Topside>
                    <h4>Logradouro</h4>
                    <Link to="/publicPlace">
                      <h2>Voltar</h2>
                    </Link>
                  </Topside>
                  <BottomSide>
                    <BottomContainer>
                      <Form ref={formRef} onSubmit={handleSubmit}>                           

                        <Input name="name"  placeholder="Nome do Bairro" />  

                        <Box sx={{ minWidth: 120}} mt={1} mb={1} >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">País</InputLabel>
                            {paises.length > 0 &&
                            <Select
                              name="country_id"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              defaultValue={paises[0].id}
                              label="País"
                              onChange={handleChange}
                            >

                              {paises.map((pais) => {
                                return (
                                  <MenuItem key={pais.id} value={pais.id}>{pais.name}</MenuItem>
                                )
                              } )}
      
                            </Select>
                            }
                          </FormControl>
                        </Box>    
                        <Box sx={{ minWidth: 120 }} mb={1}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                            {states.length > 0 &&
                            <Select
                              name="state_id"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="País"
                              onChange={handleStateChange}
                            >

                              {states.map((state) => {
                                return (
                                  <MenuItem key={state.id} value={state.id}>{state.name}</MenuItem>
                                )
                              } )}
      
                            </Select>
                            }
                          </FormControl>
                        </Box>      

                        <Box sx={{ minWidth: 120 }} mb={1}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
                            {/* {locations.length > 0 && */}
                            <Select
                              name="location_id"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Cidade"
                              onChange={handleLocationChange}
                            >

                              {locations.map((location) => {
                                return (
                                  <MenuItem key={location.id} value={location.id}>{location.name}</MenuItem>
                                )
                              } )}
      
                            </Select>
                            {/* } */}
                          </FormControl>
                        </Box>  

                         <Box sx={{ minWidth: 120 }} mb={1}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Bairro</InputLabel>
                            {/* {districts.length > 0 && */}
                            <Select
                              name="district_id"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Cidade"
                              onChange={handleDistrictChange}
                            >

                              {districts.map((district) => {
                                return (
                                  <MenuItem key={district.id} value={district.id}>{district.name}</MenuItem>
                                )
                              } )}
      
                            </Select>
                            {/* } */}
                          </FormControl>
                        </Box>    

                        <Box sx={{ minWidth: 120 }} mb={1}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tipo de Logradouro</InputLabel>
                            {PPTypes.length > 0 &&
                            <Select
                              name="publicPlaceType_id"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Cidade"
                              onChange={handlePPTypeChange}
                            >

                              {PPTypes.map((publicPlaceType) => {
                                return (
                                  <MenuItem key={publicPlaceType.id} value={publicPlaceType.id}>{publicPlaceType.name}</MenuItem>
                                )
                              } )}
      
                            </Select>
                            }
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
          Estado gravado com sucesso.
        </Alert>
      </Snackbar>
      </>
    )
}

export default AddDistricts;