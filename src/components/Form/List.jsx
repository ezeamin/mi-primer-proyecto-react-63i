import Item from './Item';

const List = (props) => {
  const { contacts } = props;

  return (
    <ul>
      {contacts.length === 0 && <p>No hay contactos</p>}
      {contacts.map((contact) => (
        <Item key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
export default List;
