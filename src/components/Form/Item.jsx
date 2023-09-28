const Item = (props) => {
  const { contact } = props;

  return (
    <li>
      {contact.name} - {contact.phone} - {contact.email}
    </li>
  );
};
export default Item;
