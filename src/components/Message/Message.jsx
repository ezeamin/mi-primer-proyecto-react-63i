import { useEffect, useState } from 'react';
import { getRandomNumber } from '../../helpers/helpers';

const Message = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(50);

  // 1er caso: Al montarse el componente
  useEffect(() => {
    console.log('holaaaa');
  }, []);

  // 2do caso: Al montarse el componente || al actualizarse un estado
  useEffect(() => {
    console.log('cambió mensaje');
  }, [message]);

  // 3er caso: Al montarse el componente || al actualizarse varios estados
  useEffect(() => {
    console.log('cambió mensaje O count');
  }, [message,count]);

  // 4to caso: Al desmontarse el componente 
  useEffect(() => {
    // Todo lo que se ejecute en esta funcion, será cuando se desmonte
    return () => {
        console.log("Chau")
    }
  }, [message,count]);

  const handleChange = () => {
    setCount(count + 1);
  };

  const handleMessageChange = () => {
    setMessage(getRandomNumber(0,500));
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleChange}>+1</button>
      <h1>{message}</h1>
      <button onClick={handleMessageChange}>Otro num</button>
    </div>
  );
};

export default Message;
