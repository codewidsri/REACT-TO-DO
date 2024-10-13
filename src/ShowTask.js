import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
function ShowTask({ Task }) {
    const [tab, setTab] = useState('all')
    return (
        <>
            <Tabs activeKey={tab} onSelect={(k) => setTab(k)} className="mx-3">
                <Tab eventKey='all' title='All' className="mx-3 my-3"></Tab>
                <Tab eventKey='completed' title='Completed' className="mx-3 my-3">Completed content</Tab>
                <Tab eventKey='pending' title='Pending' className="mx-3 my-3">Pending content</Tab>
            </Tabs>
        </>
    )
}
export default ShowTask;