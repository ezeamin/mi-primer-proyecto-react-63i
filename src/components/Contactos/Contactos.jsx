import { useEffect, useState } from 'react';

import Formv3 from '../Form/Formv3';
import List from '../Form/List';

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
