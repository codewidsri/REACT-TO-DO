import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function AddTask({ setTask }) {
    const [addNewTask,setNewTask]=useState({
            task:'',
            start:'',
            finish:'',
            completed:false
    });
    const handleSubmit = (Event) => {
        Event.preventDefault()
        setTask(addNewTask);
    }
    const handleChange = (Event)=>{
        setNewTask({
            ...addNewTask,
            [Event.target.name]:Event.target.value
        })
    }
    return (
        <>
            <Form style={{ width: '60dvw' }} onSubmit={handleSubmit} className="mb-3">
                <Form.Group style={{ display: "flex", justifyContent: "center" }}>
                    <Form.Control type="text" placeholder="Enter Task" className="mx-3" name="task" onChange={handleChange}/>
                    <Form.Group className="mx-3">
                        <Form.Label className="fw-bold">Starting Date</Form.Label>
                        <Form.Control type="date" name="start" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mx-3">
                        <Form.Label className="fw-bold">Finishing Date</Form.Label>
                        <Form.Control type="date" name="finish" onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ textWrap: "nowrap" }}>Add Task</Button>
                </Form.Group>
            </Form>
        </>
    )
}
export default AddTask;