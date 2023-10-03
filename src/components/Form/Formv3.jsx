import { useRef } from 'react';

import { getRandomNumber } from '../../helpers/helpers';

import { isValidDataContacts } from '../../helpers/validators';

const Formv3 = (props) => {
  const { setContacts } = props;

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;

    if (isValidDataContacts(name, phone, email)) {
      alert('Felicidades!');

      // setValue(valorNuevo)
      // setValue((valorAnterior) => valorNuevo)
      
      setContacts((prev)=>[
        ...prev,
        {
          id: getRandomNumber(0, 500),
          name: name,
          phone: phone,
          email: email,
        },
      ]);
    } else {
      alert('Revisá los campos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor='name-input' className='form-label'>
          Nombre
        </label>
        <input
          ref={nameRef}
          type='text'
          id='name-input'
          className='form-control'
        />
      </fieldset>
      <fieldset className='mt-2'>
        <label htmlFor='phone-input' className='form-label'>
          Teléfono
        </label>
        <input
          ref={phoneRef}
          type='tel'
          id='phone-input'
          className='form-control'
        />
      </fieldset>
      <fieldset className='mt-2'>
        <label htmlFor='email-input' className='form-label'>
          Email
        </label>
        <input
          ref={emailRef}
          type='email'
          id='email-input'
          className='form-control'
        />
      </fieldset>
      <button type='submit' className='btn btn-danger mt-3'>
        Enviar
      </button>
    </form>
  );
};
export default Formv3;
