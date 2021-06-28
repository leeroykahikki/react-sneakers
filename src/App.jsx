import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

const cardsArr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Sueder',
    price: 12999,
    imageURL: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imageURL: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageURL: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageURL: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {cardsArr.map((card, index) => (
            <Card title={card.title} price={card.price} imageURL={card.imageURL} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
