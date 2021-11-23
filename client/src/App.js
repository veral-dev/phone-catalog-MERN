import React from 'react';
import PhoneProvider from './context/phone-context';
import AppRouter from './routes/AppRoutes';
import './App.css';
function App() {
  return (
    <PhoneProvider>
      <AppRouter />
    </PhoneProvider>
  );
}

export default App;
