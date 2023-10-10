import { useEffect, useState } from 'react';

import Formv3 from '../components/Form/Formv3';
import List from '../components/Form/List';

const contactosLS = JSON.parse(localStorage.getItem('contactos')) || [];

const Contactos = () => {
  const [contacts, setContacts] = useState(contactosLS);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Formv3 setContacts={setContacts} />
      <List contacts={contacts} />
    </>
  );
};
export default Contactos;
