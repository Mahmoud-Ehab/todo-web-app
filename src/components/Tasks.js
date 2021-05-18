import Task from './Task';
import { useState, useEffect } from 'react';

const Tasks = (props) => {
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        props.selectedTaskListener(selectedTask);
    }, [selectedTask]);

    // Select one task
    const handleClick = (e) => {
        setSelectedTask(e.target.id);
    };

    // return jsx statement
    return (
        <div id='tasksDiv' style={{ padding: 10 }}>
            {
                props.tasks.map(
                    (task) => 
                    <Task id={task.id} selectedTaskId={selectedTask} rmvTaskHandler={props.rmvTaskHandler}
                    title={task.title} deadline={new Date(task.deadline).getTime()} 
                    selected={task.id == selectedTask} onClickHandler={handleClick} />
                ) 
            }
        </div>
    );
};

export default Tasks;