import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
function ShowTask({ Task }) {
    const [tab, setTab] = useState('all')
    function AllComponent({ Type }) {
        return <>
            <ul className="tasks">
                {
                    Type + "" === undefined + "" ? (
                        Task.map((ele, index) => (
                            <li key={index}><div><p>Name : {ele['task']} </p> <p>Created At : {ele['start']}</p> <p>Finished At : {ele['finish']}</p></div> <div><Button variant="warning">Update</Button> <Button variant="danger">Delete</Button></div></li>
                        ))
                    ) : (Task.filter((ele) => (
                        ele['completed'] + "" === Type + ""
                    )).map((ele, index) => (
                        <li key={index}>{ele['task']}</li>
                    )))
                }
            </ul>
        </>
    }
    return (
        <>
            <Tabs activeKey={tab} onSelect={(k) => setTab(k)}>
                <Tab eventKey='all' title='All' className="mx-3 my-3"><AllComponent Type={undefined} /></Tab>
                <Tab eventKey='completed' title='Completed' className="mx-3 my-3"><AllComponent Type={true} /></Tab>
                <Tab eventKey='pending' title='Pending' className="mx-3 my-3"><AllComponent Type={false} /></Tab>
            </Tabs>
        </>
    )
}

export default ShowTask;