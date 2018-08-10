import React, { Component } from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Main from './components/main'
import Demo from './components/demo'
import MiningMonitor from './components/minigMonitor'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/demo" component={Demo}/>
          <Route path="/monitor" component={MiningMonitor}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
