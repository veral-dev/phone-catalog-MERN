import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import AddEditPhone from '../pages/AddEditPhone';
import Alert from '../components/ui/Alert';
import { AlertContext } from '../context/Alert.context';
import DetailPhone from '../pages/DetailPhone';

export default function AppRouter() {
  const { toastMsg, errorMsg } = useContext(AlertContext);

  return (
    <Router>
      {(toastMsg || errorMsg) && (
        <div style={{ position: 'absolute', top: 20, right: 20, width: '300px' }}>
          {toastMsg && <Alert message={toastMsg} success />}
          {errorMsg && <Alert message={errorMsg} />}
        </div>
      )}
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form/:id" component={AddEditPhone} />
          <Route path="/form" component={AddEditPhone} />
          <Route path="/phone/:id" component={DetailPhone} />
        </Switch>
      </main>
    </Router>
  );
}
