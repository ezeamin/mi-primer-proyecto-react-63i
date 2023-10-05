import { useEffect, useState } from 'react';

const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    return todos;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const postTodo = async (body) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error('Error al crear la tarea');
};

const NormalFetch = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  const handlePost = () => {
    postTodo({
      title: 'Nuevo todo',
      completed: false,
    });
  };

  return (
    <div>
      <button onClick={handlePost} className='btn btn-primary mb-4'>
        Post
      </button>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
export default NormalFetch;
