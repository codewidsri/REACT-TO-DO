import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function AddTask({ setTask }) {

    const [addNewTask,setNewTask]=useState({
            task:'',
            start: new Date().toLocaleDateString(),
            finish:'',
            completed:false
    });

    const handleSubmit = (Event) => {
        Event.preventDefault()
        setTask((prevTasks) => [...prevTasks, addNewTask]);
    }

    const handleChange = (Event)=>{
        setNewTask({
            ...addNewTask,
            [Event.target.name]:Event.target.value,
        })
    }

    return (
        <>
            <Form style={{ width: '50dvw' }} onSubmit={handleSubmit} className="mb-3">
                <Form.Group style={{ display: "flex", justifyContent: "center" ,gap:"10px" }}>
                    <Form.Control type="text" placeholder="Enter Your Task" name="task" onChange={handleChange}/>
                    <Button variant="primary" type="submit" style={{ textWrap: "nowrap" }}>Add Task</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default AddTask;