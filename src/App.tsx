import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ContactWays from './pages/FollowUp/ContactWays';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>

    <ContactWays/>
    <GlobalStyle/>
  </>
) 

export default App;
