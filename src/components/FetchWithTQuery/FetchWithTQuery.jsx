import { useMutation, useQuery } from '@tanstack/react-query';

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  return todos;
};

const postTodo = async (body) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error('Error al crear la tarea');
};

const FetchWithTQuery = () => {
  const { isLoading, data, isError } = useQuery(['todos'], fetchTodos);

  const addTodo = useMutation(postTodo);

  const handlePost = () => {
    addTodo.mutate({
      title: 'Nuevo todo',
      completed: false,
    });
  };

  return (
    <div className='my-5'>
      <p>FetchWithTQuery</p>
      <div className='my-5'>
        <button onClick={handlePost} className='btn btn-primary'>
          Post
        </button>
        {addTodo.isLoading && <p>Creando tarea...</p>}
      </div>
      {isLoading && <p>Cargando tareas...</p>}
      {isError && <p>Error al cargar las tareas</p>}
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};

export default FetchWithTQuery;
