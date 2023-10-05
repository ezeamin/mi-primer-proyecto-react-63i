import { useEffect, useState } from 'react';
import { getRandomNumber } from '../../helpers/helpers';

const URL = import.meta.env.VITE_TODOS_URL;

// GET, POST, PUT/PATCH, DELETE
const getTodos = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const postTodo = async (body) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (!response.ok) console.error('Ocurrio un error');
  } catch (e) {
    console.error(e);
  }
};

// Cuando cargue el componente, cargue los datos (es decir, haga el llamado)
// "Query"!!!!

// Cuando se produzca una accion en el componente ya cargado, llamar a la API
// "Mutation"!!!

const NormalFetch = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      if (data) {
        setTodos(data);
      }
    });
  }, []);

  const handleClick = () => {
    postTodo({
      id: getRandomNumber(0, 5000),
      userId: getRandomNumber(0, 5000),
      title: 'Holaaa',
      completed: false,
    });
  };

  return (
    <>
      <button onClick={handleClick} className='btn btn-primary my-5'>
        Agregar nueva tarea
      </button>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  );
};
export default NormalFetch;
