import { useState } from 'react';

const Counter = () => {
  // hooks de React
  // useState, useEffect, (useRef)
  // useReducer, useCallback, useMemo, useContext...

  // 1er elemento = valor
  // 2do elemento = fn para cambiar ese valor
  const [count, setCount] = useState(0);

  const handleChange = (quantity) => {
    setCount(count + quantity);
  };

  return (
    <div>
      <h1 className='display-1 text-center'>{count}</h1>
      <div className='d-flex gap-2'>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => handleChange(1)}
        >
          +1
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => handleChange(-1)}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
