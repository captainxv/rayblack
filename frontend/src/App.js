import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import MyAccount from './pages/MyAccount';
import RightScreen from './pages/RightScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/account" component={MyAccount} />
        <Route path="/right-screen" component={RightScreen} />
      </Switch>
    </Router>
  );
}

export default App;