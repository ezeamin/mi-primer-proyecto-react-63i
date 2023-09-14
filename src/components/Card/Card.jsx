import './Card.css';

const Card = (props) => {
  const { titulo, imagen } = props;
  // logica

  return (
    //jsx
    <article className='card'>
      <div className='card-header'>
        <img src={imagen} alt='Imagen de los simpsons' />
      </div>
      <div className='card-body'>
        <h2>{titulo}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          quidem magni fuga, at ut alias?
        </p>
      </div>
    </article>
  );
};

export default Card;
