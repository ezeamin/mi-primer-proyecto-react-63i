import Card from '../Card/Card';

import './CardsGallery.css';

const info = [
  {
    id: 1,
    titulo: 'los increibles',
    imagen:
      'https://fotografias.larazon.es/clipping/cmsimages01/2019/08/06/EAABE530-50DF-4836-A39E-1076938BC604/98.jpg?crop=962,541,x56,y0&width=1900&height=1069&optimize=low&format=webply',
  },
  {
    id: 2,
    titulo: 'Los simpsons',
    imagen:
      'https://media.revistagq.com/photos/607d3e0c4286e6a59febbacc/master/pass/los-simpson.jpg',
  },
  {
    id: 3,
    titulo: 'Mario',
    imagen:
      'https://elcomercio.pe/resizer/ogmrm_zqIO6bNsdb3sjIyao1Un0=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3HHLTK3N3NDSVGVDJTL7H7Y6KQ.jpg',
  },
];

const CardsGallery = () => {
  return (
    <section className='cards-container'>
      {info.map((item) => {
        return <Card key={item.id} titulo={item.titulo} imagen={item.imagen} />;
      })}
    </section>
  );
};

export default CardsGallery;
