import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddWorkout = (props) => {


    //state variable for each info collected from form
    let [date, setDate] = useState(Date)
    let [exerciseName, setExerciseName] = useState([])
    let [exerciseSet, setExerciseSet] = useState([])
    let [exerciseWeight, setExerciseWeight] = useState([])
    let [exerciseRep, setExerciseRep] = useState([])
    let [physiqueUpdatePicture, setPhysiqueUpdatePicture] = useState("")
    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();
    const createExerciseSubmitHandler = (e)=>{
        e.preventDefault();

        let formInfoObj = {date, exerciseName, exerciseSet, exerciseWeight, exerciseRep, physiqueUpdatePicture};

        axios.post("http://localhost:8000/api/exercises", formInfoObj) //post request to our backend route in the routes.js file
            .then(res=>{
                console.log("response after posting", res)

                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form was not filled out properly 
                if(res.data.error){ //validation errors happened
                    //res.data.error.errors contains an object that has my validation error messages for each input
                    setFormErrors(res.data.error.errors)
                }else{
                    //else if the form was filled out properly and it successfully created a new exercise, update the newExerciseAdded variable so that it triggers the allexercises component re-gather the new list of exercises
                    props.setNewExerciseAdded(!props.newExerciseAdded)

                    //if the form was in separate route than all exercises component, then you can redirect to "/" after form submits using history.push("/")
                    history.push("/dashboard")
                }
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }



    return (
        <div>
            <form onSubmit = {createExerciseSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Exercise Name</label>
                    <input onChange = {(e)=>{setExerciseName(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.exerciseName?.message}</p>
                    {/* <p className="text-danger">{formErrors.firstName? formErrors.firstName.message : ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="">Set 1</label>
                    <input onChange = {(e)=>{setExerciseSet(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.exerciseSet?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Exercise Weight</label>
                    <input onChange = {(e)=>{setExerciseWeight(e.target.value)}} type="number" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.exerciseWeight?.message}</p>

                </div>
                <div className="form-group">
                    
                </div>
                <input type="submit" value="Submit Workout" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};



export default AddWorkout;