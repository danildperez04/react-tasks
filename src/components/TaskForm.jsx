import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold text-white mb-3'>Crea una Tarea!!</h1>
        <input
          className='bg-slate-300 p-3 w-full mb-2'
          placeholder='Escribe una tarea'
          onChange={handleChange}
          value={title}
          autoFocus
        />
        <textarea
          className='bg-slate-300 p-3 w-full mb-2'
          placeholder='Escribe la descripcion de la tarea'
          onChange={handleChangeDescription}
          value={description}
        />
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
    </div>
  );
}
