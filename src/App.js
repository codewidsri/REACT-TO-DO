import { useEffect, useState } from 'react';
import './App.css';
import ShowTask from './ShowTask';
import AddTask from './AddTask';

function App() {
  const [Task, setTask] = useState([]);
  useEffect(()=>{
    if(localStorage.getItem("Tasks")===null){
      localStorage.setItem("Tasks","[]")
    }
    else{
      const task=JSON.parse(localStorage.getItem('Tasks'))
      setTask(task);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("Tasks",`${JSON.stringify(Task)}`)
  },[Task])

  return (
    <>
        <AddTask setTask={setTask} />
        <ShowTask Task={Task} />
    </>
  );
}

export default App;