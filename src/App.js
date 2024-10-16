import { useState } from 'react';
import './App.css';
import ShowTask from './ShowTask';
import AddTask from './AddTask';

function App() {
  const [Task, setTask] = useState([]);
  return (
    <>
      <main>
        <AddTask setTask={setTask} />
        <ShowTask Task={Task} />
      </main>
    </>
  );
}

export default App;
