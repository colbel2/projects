import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import AddWorkout from './components/AddWorkout';
import ViewOneWorkout from './components/ViewOneWorkout';
import EditWorkout from './components/EditWorkout';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { useState } from 'react';

function App() {
  let [newWorkoutAdded, setNewWorkoutAdded] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route exact path = "/">
            <SignIn></SignIn>
          </Route>
          
          <Route exact path = "/dashboard">
            <Dashboard newWorkoutAdded={newWorkoutAdded}></Dashboard>
          </Route>

          <Route exact path = "/addWorkout">
            <AddWorkout newWorkoutAdded={newWorkoutAdded} setNewWorkoutAdded={setNewWorkoutAdded}></AddWorkout>
          </Route>

          <Route exact path = "/workout/:id">
            <ViewOneWorkout></ViewOneWorkout>
          </Route>
          
          <Route exact path = "/workout/edit/:id">
            <EditWorkout></EditWorkout>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;