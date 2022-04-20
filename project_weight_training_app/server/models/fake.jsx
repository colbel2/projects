
                    <Row>
                        <Form.Group as={Col}>
                            <label htmlFor="">Exercise: </label>
                            <input onChange={(e) => { setExercise2(e.target.value) }} placeholder='Exercise Name' type="text" name="" id="" className="form-control" />
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
                            <p className="text-danger">{formErrors.reps1_1?.message}</p>
                            <p className="text-danger">{formErrors.reps1_1 ? formErrors.reps1_1.message : ""}</p>
                            <input onChange={(e) => { setReps2_2(e.target.value) }} placeholder='Set 2 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_3(e.target.value) }} placeholder='Set 3 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_4(e.target.value) }} placeholder='Set 4 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_5(e.target.value) }} placeholder='Set 5 Reps' type="text" name="" id="" className="form-control" />
                            <input onChange={(e) => { setReps2_6(e.target.value) }} placeholder='Set 6 Reps' type="text" name="" id="" className="form-control" />
                        </Form.Group>
                    </Row> <Row>
                        <Form.Group as={Col}>
                            {/* <input type="submit" value="Add Exercise" className="btn btn-primary mt-3" /> */}

                            {/* <input type="submit" value="Submit Workout" className="btn btn-success mt-3" /> */}
                        </Form.Group>
                    </Row>
