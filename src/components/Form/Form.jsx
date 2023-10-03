import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, phone, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor='name-input' className='form-label'>
          Nombre
        </label>
        <input
          type='text'
          id='name-input'
          value={name}
          className='form-control'
          onChange={handleChangeName}
        />
      </fieldset>
      <fieldset className='mt-2'>
        <label htmlFor='phone-input' className='form-label'>
          Teléfono
        </label>
        <input
          type='tel'
          id='phone-input'
          value={phone}
          className='form-control'
          onChange={handleChangePhone}
        />
      </fieldset>
      <fieldset className='mt-2'>
        <label htmlFor='email-input' className='form-label'>
          Email
        </label>
        <input
          type='email'
          id='email-input'
          value={email}
          className='form-control'
          onChange={handleChangeEmail}
        />
      </fieldset>
      <button type='submit' className='btn btn-danger mt-3'>Enviar</button>
    </form>
  );
};
export default Form;
