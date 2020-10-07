import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.scss'

//components
import {Sign} from './components/Sign/Sign';


let App: React.FC = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route 
            path='/sign'
            render={() => <Sign /> }
        />
      </Switch>
    </div>
  );
}

export default App;
