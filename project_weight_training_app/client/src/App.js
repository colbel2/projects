
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route exact path = "/">
            <SignIn></SignIn>
          </Route>
          
          <Route exact path = "/dashboard">
            <Dashboard></Dashboard>
          </Route>

          <Route exact path = "/addWorkout">
            <AddWorkout></AddWorkout>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
