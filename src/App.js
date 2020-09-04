import React from 'react';
// import { Route, Switch } from 'react-router-dom'
import TabPanel from './components/layout/Navigation'
import ColumnSize from './components/layout/ThemeStyles'
import "./app.css"
// import Home from './components/home/Home'


const App = () => {
  return (
    <div className="page-container">
      <div>
        <TabPanel ColumnSize={ColumnSize} />
        {/* <Switch>
        <Route exact path="/home" component={Home} />
      </Switch> */}
      </div>
    </div>
  )

}

export default App;
