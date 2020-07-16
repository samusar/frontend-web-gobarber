import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/Auth';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      <GlobalStyle />
    </AuthProvider>
  </>
);

export default App;
