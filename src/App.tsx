import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';
import CadastroRoutes from './routes/CadastroRoutes';
import FollowupRoutes from './routes/FollowupRoutes';
import GlobalStyle from './styles/global';
import {AuthProvider} from './hooks/AuthContext';

const App: React.FC = () => (
  
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes/>
      <CadastroRoutes/>
      <FollowupRoutes/>
    </AuthProvider>
    <GlobalStyle/>
  </BrowserRouter>
  
);

export default App;
