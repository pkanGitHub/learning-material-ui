import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './components/About'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="" component={} />
      <Route exact path="" component={} /> */}
    </div>
  )
}

export default App;
