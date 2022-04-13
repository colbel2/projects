import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import AddWorkout from './components/AddWorkout';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { useState } from 'react';

function App() {
  let [newExerciseAdded, setNewExerciseAdded] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route exact path = "/">
            <SignIn></SignIn>
          </Route>
          
          <Route exact path = "/dashboard">
            <Dashboard newExerciseAdded={newExerciseAdded}></Dashboard>
          </Route>

          <Route exact path = "/addWorkout">
            <AddWorkout newExerciseAdded={newExerciseAdded} setNewExerciseAdded={setNewExerciseAdded}></AddWorkout>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;