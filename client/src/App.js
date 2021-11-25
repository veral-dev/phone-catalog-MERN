import React from 'react';
import AlertProvider from './context/Alert.context';
import PhoneProvider from './context/Phone.context';

import AppRouter from './routes/AppRoutes';
import './styles/App.css';

function App() {
  return (
    <AlertProvider>
      <PhoneProvider>
        <AppRouter />
      </PhoneProvider>
    </AlertProvider>
  );
}

export default App;
