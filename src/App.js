import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Home from './components/home/Home'


const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App;
