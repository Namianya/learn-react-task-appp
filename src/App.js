import { useState } from "react"

import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const name = 'Task Tracker';
  const [tasks, setTasks] = useState([
   
    { 
      id: 1,
     text: "Task 1",
     day: "Tuesday , 2020-01-01",
     remider:true,
   },
   { 
      id: 2,
     text: "Task 2",
     day: "Wednesday , 2020-01-02",
     remider:true,
   },
   { 
      id: 3,
     text: "Task 3",
     day: "Thursday , 2020-01-03",
     remider:true,
   },
   { 
      id: 4,
     text: "Task 4",
     day: "Friday , 2020-01-04",
     remider:true,
   }
]);
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
}


// toggle reminder
  return (
    <div className="container">
     
     <Header title={name} />
     {tasks.length > 0? <Tasks tasks={tasks} onDelete={deleteTask}/>: <p>No Task</p>}
     
    </div>
  );
}

export default App;
