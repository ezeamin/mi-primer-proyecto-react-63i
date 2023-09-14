import './Card.css';

const Card = () => {
  // logica

  return (
    //jsx
    <article className='card'>
      <div className='card-header'>
        <img src="https://media.revistagq.com/photos/607d3e0c4286e6a59febbacc/master/pass/los-simpson.jpg" alt="Imagen de los simpsons" />
      </div>
      <div className='card-body'>
        <h2>Los simpsons</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quidem magni fuga, at ut alias?</p>
      </div>
    </article>
  );
}

export default Card;
