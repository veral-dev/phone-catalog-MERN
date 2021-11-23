import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
