import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ViewOneWorkout = () => {
    const { id } = useParams();
    const history = useHistory();
    const [workoutDetails, setWorkoutDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/workouts/${id}`)

            .then(res => {
                console.log("response when making request for one workout", res)
                setWorkoutDetails(res.data.results)

            })
            .catch(err => console.log(err))

            
        
        
        
            }

    , [])
    
    const deleteWorkout = ()=>{
                console.log("Deleting Workout")
                axios.delete(`http://localhost:8000/api/workouts/${id}`)
                .then(res=>{
                    console.log("response when deleting")
                    history.push("/dashboard")
                })
                .catch(err => console.log(err))}



    return (
        <div>
            <h1>Details about {workoutDetails.workoutName}</h1>
            <p>{workoutDetails.workoutDate}</p>
            <a href="http://localhost:3000/dashboard" className="btn btn-info" role="button">Home</a>
            
            <button onClick = {deleteWorkout} className='btn btn-danger'>Delete Workout</button>

            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>1. {workoutDetails.exercise1}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight1_1}</td>
                        <td>{workoutDetails.weight1_2}</td>
                        <td>{workoutDetails.weight1_3}</td>
                        <td>{workoutDetails.weight1_4}</td>
                        <td>{workoutDetails.weight1_5}</td>
                        <td>{workoutDetails.weight1_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps1_1}</td>
                        <td>{workoutDetails.reps1_2}</td>
                        <td>{workoutDetails.reps1_3}</td>
                        <td>{workoutDetails.reps1_4}</td>
                        <td>{workoutDetails.reps1_5}</td>
                        <td>{workoutDetails.reps1_6}</td>
                    </tr>
                </table>
            </div>

            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>2. {workoutDetails.exercise2}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight2_1}</td>
                        <td>{workoutDetails.weight2_2}</td>
                        <td>{workoutDetails.weight2_3}</td>
                        <td>{workoutDetails.weight2_4}</td>
                        <td>{workoutDetails.weight2_5}</td>
                        <td>{workoutDetails.weight2_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps2_1}</td>
                        <td>{workoutDetails.reps2_2}</td>
                        <td>{workoutDetails.reps2_3}</td>
                        <td>{workoutDetails.reps2_4}</td>
                        <td>{workoutDetails.reps2_5}</td>
                        <td>{workoutDetails.reps2_6}</td>
                    </tr>
                </table>
            </div>

            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>3. {workoutDetails.exercise3}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight3_1}</td>
                        <td>{workoutDetails.weight3_2}</td>
                        <td>{workoutDetails.weight3_3}</td>
                        <td>{workoutDetails.weight3_4}</td>
                        <td>{workoutDetails.weight3_5}</td>
                        <td>{workoutDetails.weight3_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps3_1}</td>
                        <td>{workoutDetails.reps3_2}</td>
                        <td>{workoutDetails.reps3_3}</td>
                        <td>{workoutDetails.reps3_4}</td>
                        <td>{workoutDetails.reps3_5}</td>
                        <td>{workoutDetails.reps3_6}</td>
                    </tr>
                </table>
            </div>

            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>4. {workoutDetails.exercise4}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight4_1}</td>
                        <td>{workoutDetails.weight4_2}</td>
                        <td>{workoutDetails.weight4_3}</td>
                        <td>{workoutDetails.weight4_4}</td>
                        <td>{workoutDetails.weight4_5}</td>
                        <td>{workoutDetails.weight4_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps4_1}</td>
                        <td>{workoutDetails.reps4_2}</td>
                        <td>{workoutDetails.reps4_3}</td>
                        <td>{workoutDetails.reps4_4}</td>
                        <td>{workoutDetails.reps4_5}</td>
                        <td>{workoutDetails.reps4_6}</td>
                    </tr>
                </table>
            </div>
            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>5. {workoutDetails.exercise5}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight5_1}</td>
                        <td>{workoutDetails.weight5_2}</td>
                        <td>{workoutDetails.weight5_3}</td>
                        <td>{workoutDetails.weight5_4}</td>
                        <td>{workoutDetails.weight5_5}</td>
                        <td>{workoutDetails.weight5_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps5_1}</td>
                        <td>{workoutDetails.reps5_2}</td>
                        <td>{workoutDetails.reps5_3}</td>
                        <td>{workoutDetails.reps5_4}</td>
                        <td>{workoutDetails.reps5_5}</td>
                        <td>{workoutDetails.reps5_6}</td>
                    </tr>
                </table>
            </div>

            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>6. {workoutDetails.exercise6}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight6_1}</td>
                        <td>{workoutDetails.weight6_2}</td>
                        <td>{workoutDetails.weight6_3}</td>
                        <td>{workoutDetails.weight6_4}</td>
                        <td>{workoutDetails.weight6_5}</td>
                        <td>{workoutDetails.weight6_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps6_1}</td>
                        <td>{workoutDetails.reps6_2}</td>
                        <td>{workoutDetails.reps6_3}</td>
                        <td>{workoutDetails.reps6_4}</td>
                        <td>{workoutDetails.reps6_5}</td>
                        <td>{workoutDetails.reps6_6}</td>
                    </tr>
                </table>
            </div>
            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>7. {workoutDetails.exercise7}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight7_1}</td>
                        <td>{workoutDetails.weight7_2}</td>
                        <td>{workoutDetails.weight7_3}</td>
                        <td>{workoutDetails.weight7_4}</td>
                        <td>{workoutDetails.weight7_5}</td>
                        <td>{workoutDetails.weight7_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps7_1}</td>
                        <td>{workoutDetails.reps7_2}</td>
                        <td>{workoutDetails.reps7_3}</td>
                        <td>{workoutDetails.reps7_4}</td>
                        <td>{workoutDetails.reps7_5}</td>
                        <td>{workoutDetails.reps7_6}</td>
                    </tr>
                </table>
            </div>

            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>8. {workoutDetails.exercise8}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight8_1}</td>
                        <td>{workoutDetails.weight8_2}</td>
                        <td>{workoutDetails.weight8_3}</td>
                        <td>{workoutDetails.weight8_4}</td>
                        <td>{workoutDetails.weight8_5}</td>
                        <td>{workoutDetails.weight8_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps8_1}</td>
                        <td>{workoutDetails.reps8_2}</td>
                        <td>{workoutDetails.reps8_3}</td>
                        <td>{workoutDetails.reps8_4}</td>
                        <td>{workoutDetails.reps8_5}</td>
                        <td>{workoutDetails.reps8_6}</td>
                    </tr>
                </table>
            </div>
            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>9. {workoutDetails.exercise9}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight9_1}</td>
                        <td>{workoutDetails.weight9_2}</td>
                        <td>{workoutDetails.weight9_3}</td>
                        <td>{workoutDetails.weight9_4}</td>
                        <td>{workoutDetails.weight9_5}</td>
                        <td>{workoutDetails.weight9_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps9_1}</td>
                        <td>{workoutDetails.reps9_2}</td>
                        <td>{workoutDetails.reps9_3}</td>
                        <td>{workoutDetails.reps9_4}</td>
                        <td>{workoutDetails.reps9_5}</td>
                        <td>{workoutDetails.reps9_6}</td>
                    </tr>
                </table>
            </div>
            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>10. {workoutDetails.exercise10}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight10_1}</td>
                        <td>{workoutDetails.weight10_2}</td>
                        <td>{workoutDetails.weight10_3}</td>
                        <td>{workoutDetails.weight10_4}</td>
                        <td>{workoutDetails.weight10_5}</td>
                        <td>{workoutDetails.weight10_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps10_1}</td>
                        <td>{workoutDetails.reps10_2}</td>
                        <td>{workoutDetails.reps10_3}</td>
                        <td>{workoutDetails.reps10_4}</td>
                        <td>{workoutDetails.reps10_5}</td>
                        <td>{workoutDetails.reps10_6}</td>
                    </tr>
                </table>
            </div>
            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>11. {workoutDetails.exercise11}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight11_1}</td>
                        <td>{workoutDetails.weight11_2}</td>
                        <td>{workoutDetails.weight11_3}</td>
                        <td>{workoutDetails.weight11_4}</td>
                        <td>{workoutDetails.weight11_5}</td>
                        <td>{workoutDetails.weight11_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps11_1}</td>
                        <td>{workoutDetails.reps11_2}</td>
                        <td>{workoutDetails.reps11_3}</td>
                        <td>{workoutDetails.reps11_4}</td>
                        <td>{workoutDetails.reps11_5}</td>
                        <td>{workoutDetails.reps11_6}</td>
                    </tr>
                </table>
            </div>

            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th>12. {workoutDetails.exercise12}</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Set 4</th>
                            <th>Set 5</th>
                            <th>Set 6</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Weight</td>
                        <td>{workoutDetails.weight12_1}</td>
                        <td>{workoutDetails.weight12_2}</td>
                        <td>{workoutDetails.weight12_3}</td>
                        <td>{workoutDetails.weight12_4}</td>
                        <td>{workoutDetails.weight12_5}</td>
                        <td>{workoutDetails.weight12_6}</td>
                    </tr>
                    <tr>
                        <td>Reps</td>
                        <td>{workoutDetails.reps12_1}</td>
                        <td>{workoutDetails.reps12_2}</td>
                        <td>{workoutDetails.reps12_3}</td>
                        <td>{workoutDetails.reps12_4}</td>
                        <td>{workoutDetails.reps12_5}</td>
                        <td>{workoutDetails.reps12_6}</td>
                    </tr>
                </table>
            </div>

        </div>
    );
};



export default ViewOneWorkout;