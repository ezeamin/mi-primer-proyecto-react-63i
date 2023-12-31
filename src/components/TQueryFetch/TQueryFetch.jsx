import { useMutation, useQuery } from '@tanstack/react-query';

import { getRandomNumber } from '../../helpers/helpers';
import { toast } from 'sonner';

import { getTodos, postTodo } from '../../endpoints/endpoints';

// Cuando cargue el componente, cargue los datos (es decir, haga el llamado)
// "Query"!!!!

// Cuando se produzca una accion en el componente ya cargado, llamar a la API
// "Mutation"!!!

const TQueryFetch = () => {
  const { data, isLoading, isError } = useQuery(['todos'], getTodos);

  const addTodo = useMutation(postTodo);

  const handleClick = () => {
    addTodo.mutate({
      id: getRandomNumber(0, 5000),
      userId: getRandomNumber(0, 5000),
      title: 'Holaaa',
      completed: false,
    });
  };

  if (isError) {
    toast.error('Ocurrió un error');
  }

  if (addTodo.isError) {
    toast.error('Ocurrió un error al agregar la tarea');
  }

  return (
    <>
      <button onClick={handleClick} className='btn btn-primary my-5'>
        Agregar nueva tarea
      </button>
      {addTodo.isLoading && <h1>Agregando nueva tarea...</h1>}
      {isLoading && <h1>Cargando tareas...</h1>}
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  );
};
export default TQueryFetch;
