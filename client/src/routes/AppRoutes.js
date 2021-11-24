import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import AddEditPhone from '../pages/AddEditPhone';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact component={AddEditPhone} />
        </Switch>
      </main>
    </Router>
  );
}
