import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import MenuBar from './components/layout/MenuBar'
import Container from '@material-ui/core/Container'
// import { withStyles } from '@material-ui/core/styles'
import "./app.css"
import Home from './components/home/Home'
import About from './components/about/About'

const App = () => {

  return (
    <div>
      <MenuBar />
      <div className="bgColor">
        <Container maxWidth="md">
          <Switch>
            <Redirect exact from="/Portfolio/" to="/Portfolio/home" />
            <Route exact path="/Portfolio/home" render={props => <Home {...props} />} />
            <Route exact path="/Portfolio/about" render={props => <About {...props} />} />
            {/* <Route exact path="/Portfolio/:page?" render={props => <MenuBar {...props} ColumnSize={ColumnSize} />} /> */}
          </Switch>
        </Container>
      </div>
    </div >

  )

}

export default App;
