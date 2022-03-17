import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PhoneTypes from './pages/Cadastro/PhoneTypes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>

    <PhoneTypes/>
    <GlobalStyle/>
  </>
) 

export default App;
