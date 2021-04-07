import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.component';

const hatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

const JacketsPage = () => {
  return(
    <div>
      <h1>Jackets Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={hatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
