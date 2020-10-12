import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.scss'

//components
import {Sign} from './components/Sign/Sign';
import {Profile} from './components/Profile/Profile';

let App: React.FC = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route 
            path='/sign'
            render={() => <Sign /> }
        />
        <Route
            path="/profile"
            render={() => <Profile/>}
        />
        <Route
            path="/"
            render={() => <Redirect to="/sign"></Redirect>}
        />
      </Switch>
    </div>
  );
}

export default App;
