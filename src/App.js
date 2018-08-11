import React, { Component } from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {applyMiddleware,createStore} from 'redux'
import Reducers from './reducers'
import Main from './components/main'
import Demo from './components/Demo'
import MiningMonitor from './components/minigMonitor'

const logger = (store) => (next) => (action)=>{
  console.log("the following acction will be fired",action)
  next(action)
}

const middleWare = applyMiddleware(logger)
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
