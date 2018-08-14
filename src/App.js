import React, { Component } from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import Reducers from './reducers'
import Main from './pages/main'
import Demo from './pages/Demo'
import MiningMonitor from './pages/minigMonitor'

const ownLogger = (store) => (next) => (action)=>{
  console.log("the following acction will be fired",action)
  next(action)
}

const middleWare = applyMiddleware(ownLogger,logger)
const store = createStore(Reducers,middleWare)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/demo" component={Demo}/>
            <Route path="/monitor" component={MiningMonitor}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
