import { useState } from 'react';

import Formv3 from '../Form/Formv3';
import List from '../Form/List';

const Contactos = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Formv3 setContacts={setContacts}/>
      <List contacts={contacts}/>
    </>
  );
};
export default Contactos;
