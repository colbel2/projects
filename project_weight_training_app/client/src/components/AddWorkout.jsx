import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "../App.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const AddWorkout = (props) => {
    const [visible, setVisible] = useState(false);


    let [formErrors, setFormErrors] = useState({})

    let [workoutDate, setWorkoutDate] = useState(Date)
    let [workoutName, setWorkoutName] = useState("")
    let [physiqueUpdatePicture, setPhysiqueUpdatePicture] = useState("")
    let [startTime, setStartTime] = useState("")
    let [endTime, setEndTime] = useState("")
    let [diary, setDiary] = useState("")

    let [exercise1, setExercise1] = useState("")
    let [exercise2, setExercise2] = useState("")
    let [exercise3, setExercise3] = useState("")
    let [exercise4, setExercise4] = useState("")
    let [exercise5, setExercise5] = useState("")
    let [exercise6, setExercise6] = useState("")
    let [exercis7, setExercise7] = useState("")
    let [exercise8, setExercise8] = useState("")
    let [exercise9, setExercise9] = useState("")
    let [exercise10, setExercise10] = useState("")
    let [exercise11, setExercise11] = useState("")
    let [exercise12, setExercise12] = useState("")

    let [weight1_1, setWeight1_1] = useState("")
    let [weight1_2, setWeight1_2] = useState("")
    let [weight1_3, setWeight1_3] = useState("")
    let [weight1_4, setWeight1_4] = useState("")
    let [weight1_5, setWeight1_5] = useState("")
    let [weight1_6, setWeight1_6] = useState("")

    let [weight2_1, setWeight2_1] = useState("")
    let [weight2_2, setWeight2_2] = useState("")
    let [weight2_3, setWeight2_3] = useState("")
    let [weight2_4, setWeight2_4] = useState("")
    let [weight2_5, setWeight2_5] = useState("")
    let [weight2_6, setWeight2_6] = useState("")

    let [weight3_1, setWeight3_1] = useState("")
    let [weight3_2, setWeight3_2] = useState("")
    let [weight3_3, setWeight3_3] = useState("")
    let [weight3_4, setWeight3_4] = useState("")
    let [weight3_5, setWeight3_5] = useState("")
    let [weight3_6, setWeight3_6] = useState("")

    let [weight4_1, setWeight4_1] = useState("")
    let [weight4_2, setWeight4_2] = useState("")
    let [weight4_3, setWeight4_3] = useState("")
    let [weight4_4, setWeight4_4] = useState("")
    let [weight4_5, setWeight4_5] = useState("")
    let [weight4_6, setWeight4_6] = useState("")

    let [weight5_1, setWeight5_1] = useState("")
    let [weight5_2, setWeight5_2] = useState("")
    let [weight5_3, setWeight5_3] = useState("")
    let [weight5_4, setWeight5_4] = useState("")
    let [weight5_5, setWeight5_5] = useState("")
    let [weight5_6, setWeight5_6] = useState("")

    let [weight6_1, setWeight6_1] = useState("")
    let [weight6_2, setWeight6_2] = useState("")
    let [weight6_3, setWeight6_3] = useState("")
    let [weight6_4, setWeight6_4] = useState("")
    let [weight6_5, setWeight6_5] = useState("")
    let [weight6_6, setWeight6_6] = useState("")


    let [reps1_1, setReps1_1] = useState(null)
    let [reps1_2, setReps1_2] = useState(null)
    let [reps1_3, setReps1_3] = useState(null)
    let [reps1_4, setReps1_4] = useState(null)
    let [reps1_5, setReps1_5] = useState(null)
    let [reps1_6, setReps1_6] = useState(null)

    let [reps2_1, setReps2_1] = useState(null)
    let [reps2_2, setReps2_2] = useState(null)
    let [reps2_3, setReps2_3] = useState(null)
    let [reps2_4, setReps2_4] = useState(null)
    let [reps2_5, setReps2_5] = useState(null)
    let [reps2_6, setReps2_6] = useState(null)

    let [reps3_1, setReps3_1] = useState(null)
    let [reps3_2, setReps3_2] = useState(null)
    let [reps3_3, setReps3_3] = useState(null)
    let [reps3_4, setReps3_4] = useState(null)
    let [reps3_5, setReps3_5] = useState(null)
    let [reps3_6, setReps3_6] = useState(null)

    let [reps4_1, setReps4_1] = useState(null)
    let [reps4_2, setReps4_2] = useState(null)
    let [reps4_3, setReps4_3] = useState(null)
    let [reps4_4, setReps4_4] = useState(null)
    let [reps4_5, setReps4_5] = useState(null)
    let [reps4_6, setReps4_6] = useState(null)

    let [reps5_1, setReps5_1] = useState(null)
    let [reps5_2, setReps5_2] = useState(null)
    let [reps5_3, setReps5_3] = useState(null)
    let [reps5_4, setReps5_4] = useState(null)
    let [reps5_5, setReps5_5] = useState(null)
    let [reps5_6, setReps5_6] = useState(null)

    let [reps6_1, setReps6_1] = useState(null)
    let [reps6_2, setReps6_2] = useState(null)
    let [reps6_3, setReps6_3] = useState(null)
    let [reps6_4, setReps6_4] = useState(null)
    let [reps6_5, setReps6_5] = useState(null)
    let [reps6_6, setReps6_6] = useState(null)


    const history = useHistory();
    const createWorkoutSubmitHandler = (e) => {
        e.preventDefault();


        let formInfoObj = {
            workoutName, workoutDate, physiqueUpdatePicture, startTime, endTime, diary,
            exercise1,
            exercise2,
            exercise3,
            exercise4,
            exercise5,
            exercise6,
            exercis7,
            exercise8,
            exercise9,
            exercise10,
            exercise11,
            exercise12,

            weight1_1,
            weight1_2,
            weight1_3,
            weight1_4,
            weight1_5,
            weight1_6,

            weight2_1,
            weight2_2,
            weight2_3,
            weight2_4,
            weight2_5,
            weight2_6,

            weight3_2,
            weight3_3,
            weight3_4,
            weight3_5,
            weight3_6,

            weight4_1,
            weight4_2,
            weight4_3,
            weight4_4,
            weight4_5,
            weight4_6,

            weight5_1,
            weight5_2,
            weight5_3,
            weight5_4,
            weight5_5,
            weight5_6,

            weight6_1,
            weight6_2,
            weight6_3,
            weight6_4,
            weight6_5,
            weight6_6,


            reps1_1,
            reps1_2,
            reps1_3,
            reps1_4,
            reps1_5,
            reps1_6,

            reps2_1,
            reps2_2,
            reps2_3,
            reps2_4,
            reps2_5,
            reps2_6,

            reps3_1,
            reps3_2,
            reps3_3,
            reps3_4,
            reps3_5,
            reps3_6,

            reps4_1,
            reps4_2,
            reps4_3,
            reps4_4,
            reps4_5,
            reps4_6,

            reps5_1,
            reps5_2,
            reps5_3,
            reps5_4,
            reps5_5,
            reps5_6,

            reps6_1,
            reps6_2,
            reps6_3,
            reps6_4,
            reps6_5,
            reps6_6,

        }

        axios.post("http://localhost:8000/api/workouts", formInfoObj) //post request to our backend route in the routes.js file
            .then(res => {
                console.log("response after posting", res)

                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form was not filled out properly 
                if (res.data.error) { //validation errors happened
                    //res.data.error.errors contains an object that has my validation error messages for each input
                    setFormErrors(res.data.error.errors)
                } else {
                    //else if the form was filled out properly and it successfully created a new exercise, update the newExerciseAdded variable so that it triggers the allexercises component re-gather the new list of exercises
                    props.setNewWorkoutAdded(!props.newWorkoutAdded)

                    //if the form was in separate route than all exercises component, then you can redirect to "/" after form submits using history.push("/")
                    history.push("/dashboard")
                }
            })
            .catch(err => console.log("error in submitting post request", err))

    }

    return (
        <div >

            {/* <div className="form-box"> */}
            <h1 className=''>Log a Workout</h1>
            {/* <form onSubmit={createWorkoutSubmitHandler} action=""> */}
            <Form onSubmit={createWorkoutSubmitHandler} action="" className="d-flex justify-content-center flex-nowrap" >
                <Row >

                    <Form.Group as={Col}>

                        <label htmlFor="">Workout: </label>
                        <input onChange={(e) => { setWorkoutName(e.target.value) }} placeholder="Workout Name" type="text" name="" id="" className="form-control" />
                        <p className="text-danger">{formErrors.workoutName?.message}</p>
                        <p className="text-danger">{formErrors.workoutName ? formErrors.workoutName.message : ""}</p>
                    </Form.Group>

                    <Form.Group as={Col}>

                        <label htmlFor="">Date: </label>
                        <input onChange={(e) => { setWorkoutDate(e.target.value) }} placeholder='' type="Date" name="" id="" className="form-control" />
                        <p className="text-danger">{formErrors.workoutDate?.message}</p>
                        <p className="text-danger">{formErrors.workoutDate ? formErrors.workoutDate.message : ""}</p>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <label htmlFor="">Start Time: </label>
                        <input onChange={(e) => { setStartTime(e.target.value) }} placeholder='' type="time" name="" id="" className="form-control" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <label htmlFor="">End Time: </label>
                        <input onChange={(e) => { setEndTime(e.target.value) }} placeholder='' type="time" name="" id="" className="form-control" />
                    </Form.Group>
                    <Row>

                    </Row>
                    <Row><Form.Group as={Col}>
                        <label htmlFor="">Exercise: </label>
                        <input onChange={(e) => { setExercise1(e.target.value) }} placeholder='Exercise Name' type="text" name="" id="" className="form-control" />
                        <p className="text-danger">{formErrors.exerciseName?.message}</p>
                        <p className="text-danger">{formErrors.exerciseName ? formErrors.exerciseName.message : ""}</p>

                    </Form.Group>
                        <Form.Group as={Col}>
                            <h2>Weight</h2>
                            <input onChange={(e) => { setWeight1_1(e.target.value) }} placeholder='Set 1 Weight' type="text" name="" id="" className="form-control" />
                            <p className="text-danger">{formErrors.weight1_1?.message}</p>
                            <p className="text-danger">{formErrors.weight1_1 ? formErrors.weight1_1.message : ""}</p>
                            <input onChange={(e) => { setWeight1_2(e.target.value) }} placeholder='Set 2 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight1_3(e.target.value) }} placeholder='Set 3 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight1_4(e.target.value) }} placeholder='Set 4 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight1_5(e.target.value) }} placeholder='Set 5 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight1_6(e.target.value) }} placeholder='Set 6 Weight' type="text" name="" id="" className="form-control" />


                        </Form.Group>
                        <Form.Group as={Col}>
                            <h2>Reps</h2>
                            <input onChange={(e) => { setReps1_1(e.target.value) }} placeholder='Set 1 Reps' type="text" name="" id="" className="form-control" />
                            <p className="text-danger">{formErrors.reps1_1?.message}</p>
                            <p className="text-danger">{formErrors.reps1_1 ? formErrors.reps1_1.message : ""}</p>
                            <input onChange={(e) => { setReps1_2(e.target.value) }} placeholder='Set 2 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps1_3(e.target.value) }} placeholder='Set 3 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps1_4(e.target.value) }} placeholder='Set 4 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps1_5(e.target.value) }} placeholder='Set 5 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps1_6(e.target.value) }} placeholder='Set 6 Reps' type="text" name="" id="" className="form-control" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <input type="submit" value="Submit Workout" className="btn btn-success mt-3" />
                            {/* <button className="btn btn-primary mt-3" onClick={() => setVisible(!visible)}>Add Exercise</button>
                            {visible && <div></div>} */}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <label htmlFor="">Exercise: </label>
                            <input onChange={(e) => { setExercise2(e.target.value) }} placeholder='Exercise 2 Name' type="text" name="" id="" className="form-control" />
                            <p className="text-danger">{formErrors.exerciseName?.message}</p>
                            <p className="text-danger">{formErrors.exerciseName ? formErrors.exerciseName.message : ""}</p>

                        </Form.Group>
                        <Form.Group as={Col}>
                            <h2>Weight</h2>
                            <input onChange={(e) => { setWeight2_1(e.target.value) }} placeholder='Set 1 Weight' type="text" name="" id="" className="form-control" />
                            <p className="text-danger">{formErrors.weight1_1?.message}</p>
                            <p className="text-danger">{formErrors.weight1_1 ? formErrors.weight1_1.message : ""}</p>
                            <input onChange={(e) => { setWeight2_2(e.target.value) }} placeholder='Set 2 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight2_3(e.target.value) }} placeholder='Set 3 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight2_4(e.target.value) }} placeholder='Set 4 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight2_5(e.target.value) }} placeholder='Set 5 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight2_6(e.target.value) }} placeholder='Set 6 Weight' type="text" name="" id="" className="form-control" />


                        </Form.Group>
                        <Form.Group as={Col}>
                            <h2>Reps</h2>
                            <input onChange={(e) => { setReps2_1(e.target.value) }} placeholder='Set 1 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_2(e.target.value) }} placeholder='Set 2 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_3(e.target.value) }} placeholder='Set 3 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_4(e.target.value) }} placeholder='Set 4 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_5(e.target.value) }} placeholder='Set 5 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_6(e.target.value) }} placeholder='Set 6 Reps' type="text" name="" id="" className="form-control" />
                        </Form.Group>
                    </Row> <Row>
                        <Form.Group as={Col}>
                            <input type="submit" value="Submit Workout" className="btn btn-success mt-3" />
                            {/* <button className="btn btn-primary mt-3" onClick={() => setVisible(!visible)}>Add Exercise</button>
                            {visible && <div></div>} */}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <label htmlFor="">Exercise: </label>
                            <input onChange={(e) => { setExercise3(e.target.value) }} placeholder='Exercise 3 Name' type="text" name="" id="" className="form-control" />
                            <p className="text-danger">{formErrors.exerciseName?.message}</p>
                            <p className="text-danger">{formErrors.exerciseName ? formErrors.exerciseName.message : ""}</p>

                        </Form.Group>
                        <Form.Group as={Col}>
                            <h2>Weight</h2>
                            <input onChange={(e) => { setWeight3_1(e.target.value) }} placeholder='Set 1 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight3_2(e.target.value) }} placeholder='Set 2 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight3_3(e.target.value) }} placeholder='Set 3 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight3_4(e.target.value) }} placeholder='Set 4 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight3_5(e.target.value) }} placeholder='Set 5 Weight' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setWeight3_6(e.target.value) }} placeholder='Set 6 Weight' type="text" name="" id="" className="form-control" />


                        </Form.Group>
                        <Form.Group as={Col}>
                            <h2>Reps</h2>
                            <input onChange={(e) => { setReps3_1(e.target.value) }} placeholder='Set 1 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps3_2(e.target.value) }} placeholder='Set 2 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps3_3(e.target.value) }} placeholder='Set 3 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps3_4(e.target.value) }} placeholder='Set 4 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps3_5(e.target.value) }} placeholder='Set 5 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps3_6(e.target.value) }} placeholder='Set 6 Reps' type="text" name="" id="" className="form-control" />
                        </Form.Group>
                    </Row> <Row>
                        <Form.Group as={Col}>
                            <input type="submit" value="Submit Workout" className="btn btn-success mt-3" />
                            {/* <button className="btn btn-primary mt-3" onClick={() => setVisible(!visible)}>Add Exercise</button>
                            {visible && <div></div>} */}
                        </Form.Group>
                    </Row>









































                </Row>
            </Form>

        </div >
    );


}
export default AddWorkout;
