import Card from '../components/Card';
import FakeCard from '../components/FakeCard';

function Home({ searchValue, onChangeSearchInput, onAddItemCart, isLoadingItems, items }) {
  const fakeCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="content p-45">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {isLoadingItems
          ? fakeCards.map((card) => <FakeCard key={card} />)
          : items
              .filter((item) => item.title.toLowerCase().includes(searchValue.trim().toLowerCase()))
              .map((card) => (
                <Card
                  title={card.title}
                  price={card.price}
                  imageURL={card.imageURL}
                  onAddItemCart={onAddItemCart}
                  key={card.id}
                />
              ))}
      </div>
    </div>
  );
}

export default Home;
