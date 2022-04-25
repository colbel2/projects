import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "../App.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const EditWorkout = () => {

    const { id } = useParams();
    let [workoutInfo, setWorkoutInfo] = useState({})
    // let [formErrors, setFormErrors] = useState({})


    useEffect(() => {

        axios.get(`http://localhost:8000/api/workouts/${id}`)
            .then(res => {
                console.log("response is this-->", res)
                setWorkoutInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e)=>{
        console.log("ALERT: The form has changed!!")
        if(e.target.type === "control"){
            setWorkoutInfo({
                ...workoutInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setWorkoutInfo({
                ...workoutInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const updateWorkoutSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/workouts/${id}`, workoutInfo)
            .then(res => {
                console.log("res after put request-->", res)
                history.push("/dashboard")
            })
            .catch(err => console.log(err))

    }





















    return (
        <div>
<h1 className=''>Make Changes to {workoutInfo.workoutName} Workout</h1>
            <a href="http://localhost:3000/dashboard" className="btn btn-info" role="button">Home</a>
            {/* <form onSubmit={createWorkoutSubmitHandler} action=""> */}
            <Form onSubmit={updateWorkoutSubmitHandler} action="" className="d-flex justify-content-center flex-nowrap" >
                <Row >

                    <Form.Group as={Col}>

                        <label htmlFor="">Workout: </label>
                        <input  value={workoutInfo.workoutName} type="text" name="Workout Name" id="" className="form-control"onChange={changeHandler} />
                        {/* <p className="text-danger">{formErrors.workoutName?.message}</p>
                        <p className="text-danger">{formErrors.workoutName ? formErrors.workoutName.message : ""}</p> */}
                    </Form.Group>

                    <Form.Group as={Col}>

                        <label htmlFor="">Date: </label>
                        <input onChange={changeHandler} placeHolder={workoutInfo.workoutDate} type="Date" name="Workout Date" id="" className="form-control" />
                        {/* <p className="text-danger">{formErrors.workoutDate?.message}</p>
                        <p className="text-danger">{formErrors.workoutDate ? formErrors.workoutDate.message : ""}</p> */}
                    </Form.Group>

                    <Form.Group as={Col}>
                        <label htmlFor="">Start Time: </label>
                        <input onChange={changeHandler} placeHolder={workoutInfo.startTime} type="time" name="Workout Start Time" id="" className="form-control" />

                    </Form.Group>

                    <Form.Group as={Col}>
                        <label htmlFor="">End Time: </label>
                        <input onChange={changeHandler} placeHolder={workoutInfo.endTime} type="time" name="Workout End Time" id="" className="form-control" />

                    </Form.Group>
                
                <Row></Row>

                <Row><Form.Group as={Col}>
                        <label htmlFor="">Exercise: </label>
                        <input onChange={changeHandler} placeHolder={workoutInfo.exercise1} type="text" name="Exercise Name" id="" className="form-control" />

                        {/* <p className="text-danger">{formErrors.exerciseName?.message}</p>
                        <p className="text-danger">{formErrors.exerciseName ? formErrors.exerciseName.message : ""}</p> */}

                    </Form.Group>
                    <Form.Group as={Col}>
                            <h2>Weight</h2>
                        <input onChange={changeHandler} value={workoutInfo.weight1_1} type="text" name="Exercise 1 Set 1 Weight" id="" className="form-control" />
                            
                            {/* <p className="text-danger">{formErrors.weight1_1?.message}</p>
                            <p className="text-danger">{formErrors.weight1_1 ? formErrors.weight1_1.message : ""}</p> */}
                            <input onChange={changeHandler} placeHolder={workoutInfo.weight1_2} type="text" name="Exercise 1 Set 2 Weight" id="" className="form-control" />
                            <input onChange={changeHandler} placeHolder={workoutInfo.weight1_3} type="text" name="Exercise 1 Set 3 Weight" id="" className="form-control" />
                            <input onChange={changeHandler} placeHolder={workoutInfo.weight1_4} type="text" name="Exercise 1 Set 4 Weight" id="" className="form-control" />
                            <input onChange={changeHandler} placeHolder={workoutInfo.weight1_5} type="text" name="Exercise 1 Set 5 Weight" id="" className="form-control" />
                            <input onChange={changeHandler} placeHolder={workoutInfo.weight1_6} type="text" name="Exercise 1 Set 6 Weight" id="" className="form-control" />



                        </Form.Group>
                        <Form.Group as={Col}>
                            <h2>Reps</h2>
                            <input onChange={changeHandler} value={workoutInfo.reps1_1} type="number" name="Exercise 1 Set 1 Reps" id="" className="form-control" />
                            {/* <p className="text-danger">{formErrors.reps1_1?.message}</p>
                            <p className="text-danger">{formErrors.reps1_1 ? formErrors.reps1_1.message : ""}</p> */}
                            <input onChange={changeHandler} value={workoutInfo.reps1_2} type="number" name="Exercise 1 Set 2 Reps" id="" className="form-control" />
                            <input onChange={changeHandler} value={workoutInfo.reps1_3} type="number" name="Exercise 1 Set 3 Reps" id="" className="form-control" />
                            <input onChange={changeHandler} value={workoutInfo.reps1_4} type="number" name="Exercise 1 Set 4 Reps" id="" className="form-control" />
                            <input onChange={changeHandler} value={workoutInfo.reps1_5} type="number" name="Exercise 1 Set 5 Reps" id="" className="form-control" />
                            <input onChange={changeHandler} value={workoutInfo.reps1_6} type="number" name="Exercise 1 Set 6 Reps" id="" className="form-control" />

                        </Form.Group>
                </Row><Row>
                        <Form.Group as={Col}>
                            <input type="submit" value="Submit Workout" className="btn btn-success mt-3" />
                            {/* <button className="btn btn-primary mt-3" onClick={() => setVisible(!visible)}>Add Exercise</button>
                            {visible && <div></div>} */}
                        </Form.Group>
                    </Row>
                </Row>
                
            </Form>
        </div>




    );
};



export default EditWorkout;