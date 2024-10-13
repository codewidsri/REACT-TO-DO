import { useState } from 'react';
import './App.css';
import ShowTask from './ShowTask';
import AddTask from './AddTask';

function App() {
  const [Task,setTask]=useState([]);
  return (
    <>
      {console.log(Task)}
      <AddTask setTask={setTask}/>
      <ShowTask Task={Task}/>
    </>
  );
}

export default App;
