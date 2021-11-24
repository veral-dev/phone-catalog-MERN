import React from 'react';
import PhoneProvider from './context/Phone.context';
import AppRouter from './routes/AppRoutes';
import './styles/App.css';

function App() {
  return (
    <PhoneProvider>
      <AppRouter />
    </PhoneProvider>
  );
}

export default App;
