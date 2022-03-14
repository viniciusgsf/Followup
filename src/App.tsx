import React from 'react';

import SignIn from './pages/signIn';
import SignUp from './pages/SignUp';
import Sidebar from './assets/components/sideMenu';
import TopBar from './assets/components/topBar';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <TopBar/>
    <GlobalStyle/>
  </>
) 

export default App;
