import { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { deleteTask, tasks } = useContext(TaskContext);

  return tasks.length ? (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  ) : (
    <h1 className='text-white text-4xl font-bold text-center'>
      No hay tareas aun
    </h1>
  );
}

export default TaskList;
