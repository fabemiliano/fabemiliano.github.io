import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/details/:id" render={(props) => <MovieDetails props={props} />} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
