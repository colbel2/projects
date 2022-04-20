import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { useHistory } from "react-router-dom";

const Dashboard = (props) => {

    const history = useHistory();

    let [loggedInUser, setLoggedInUser] = useState({})
    let [allWorkouts, setAllWorkouts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("res when getting logged in user", res)
                if(res.data.results){
                    //this means the user is logged in and can accees this page
                    setLoggedInUser(res.data.results)
                }
            })
            .catch(err=>{
                //this means someone who is not logged in tried to access the dashboard
                console.log("err when gettign logged in user", err)
                history.push("/")

            })
    }, [])

    const logout = ()=>{
        axios.get("http://localhost:8000/api/users/logout", {withCredentials:true})
            .then(res=>{
                history.push("/")
            })
            .catch(err=>{
                console.log("errrr logging out", err)
            })
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/workouts")
            .then(res => {
                console.log("response when getting all workouts", res)
                setAllWorkouts(res.data.results)
            })
            .catch(err => console.log("ERROR", err))
    },  [props.newWorkoutAdded])





    return (
        <div>
            <h1>Welcome {loggedInUser.firstName}, you're in the dashboard! Congrats on being a registered user!</h1>
            <button onClick = {logout} className="btn btn-info">Log Out</button>
            {allWorkouts.map((workoutObj, i)=> {
                return(
                    <div key={i} style={{ border: "1px solid black" }}>
                        <h4>{workoutObj.workoutName} {workoutObj.exerciseWeight}</h4>
                        <p>Workout Date: {workoutObj.workoutDate}</p>
                        {/* <p>ID: {workoutObj._id}</p> */}
                        </div>
                )
            })}
        </div>
    );
};


export default Dashboard;