import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/animate.css'
import './stylesheets/style.css'
import Container from 'react-bootstrap/Container';
import ToDoHeader from './components/Header';
import Tasks from './components/Tasks';
import NewTaskForm from './components/NewTaskForm';
import TaskDescription from './components/TaskDescription';
import { useState, useEffect } from 'react';

function App() {

  // Hooks
  let [tasks, setTasks] = useState(
    localStorage.getItem('TodoApp_Tasks') ? JSON.parse(localStorage.getItem('TodoApp_Tasks')) : []
  );
  let [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('TodoApp_Tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Event handlers
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      let sortedTasks = [];
      let k = -1;

      for (let i = 0; i < prevTasks.length; i++) {
        const ctdl = new Date(prevTasks[i].deadline).getTime();
        const ntdl = new Date(newTask.deadline).getTime();

        if (ntdl < ctdl) {
          sortedTasks.push(newTask);
          sortedTasks.push(prevTasks[i]);
          k = i + 1;
          break;
        }

        sortedTasks.push(prevTasks[i]);
      }

      if (k === -1) sortedTasks.push(newTask);
      else for (; k < prevTasks.length; k++) sortedTasks.push(prevTasks[k]);
      
      return [...sortedTasks];
    });
  };

  const rmvTask = (taskId) => {
    setTasks(() => (
      tasks.filter((task) => task.id !== taskId)
    ));
    setSelectedTask(null);
  };

  const selectTask = (taskId) => {
    let tmp = tasks.filter((task) => task.id == taskId);;
    setSelectedTask(tmp[0]);
  };

  const generateId = (initId) => {
    let randomId = initId;

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == randomId) {
        randomId = generateId(Math.floor(Math.random() * 100));
        break;
      }
    }

    return randomId;
  };

  // JSX return statement
  return (
    <Container className='d-flex flex-row animate__animated animate__bounceInDown' style={{height: '100vh'}}>
      <div className='d-flex flex-row flex-wrap m-auto shadow' style={{width: '100%'}}  >
        <div id='left_div'>
          <ToDoHeader />
          <Tasks tasks={tasks} rmvTaskHandler={rmvTask} selectedTaskListener={selectTask} />
        </div>

        <div id='right_div' className='p-3'>
            {selectedTask && <TaskDescription title={selectedTask.title} description={selectedTask.description} deadline={selectedTask.deadline} />}
            <NewTaskForm submitHandler={addTask} taskId={ generateId(Math.floor(Math.random() * 100)) } />
        </div>
      </div>
    </Container>
  );
}

export default App;
