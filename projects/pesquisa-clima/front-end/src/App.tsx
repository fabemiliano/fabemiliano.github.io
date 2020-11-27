import * as React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Questions from './components/Questions';
import ThanksScreen from './components/ThanksScreen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/questions' component={Questions} />
        <Route exact path='/thanksScreen' component={ThanksScreen} />
        <Route exact path='/dashboard' component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
