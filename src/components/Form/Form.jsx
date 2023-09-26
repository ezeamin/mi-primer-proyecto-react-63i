import { useRef } from 'react';

const Form = () => {
  const inputRef = useRef(null);
  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const input = document.getElementById('name-input');

    // inputRef.current = document.getElementById()
    const value = inputRef.current.value;
    console.log(value);

    titleRef.current.style.color = 'red';
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor='name-input' className='form-label'>
          Nombre
        </label>
        <input
          ref={inputRef}
          type='text'
          id='name-input'
          className='form-control'
        />
      </fieldset>
      <h1 ref={titleRef}>Este es un texto</h1>
    </form>
  );
};
export default Form;
