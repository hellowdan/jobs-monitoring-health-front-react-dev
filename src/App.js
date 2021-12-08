import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListJobComponent from './components/ListJobComponent';
import ViewJobComponent from './components/ViewJobComponent';
import AddJobComponent from './components/AddJobComponent.jsx';
import AddBranchComponent from './components/AddBranchComponent.jsx';
import ChangeBranchActivationComponent from './components/ChangeBranchActivationComponent.jsx';

function App() {
  return (
    <div>
        <Router>
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListJobComponent}></Route>
                      <Route path = "/jobs" component = {ListJobComponent}></Route>
                      <Route path = "/active-jobs" component = {ListJobComponent}></Route>
                      <Route path = "/view-job/:id" component = {ViewJobComponent}></Route>
                      <Route path = "/add-job/:id" component = {AddJobComponent}></Route>
                      <Route path = "/add-branch" component = {AddBranchComponent}></Route>
                      <Route path = "/change-branch" component = {ChangeBranchActivationComponent}></Route>
                </Switch>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
