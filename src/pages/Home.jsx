import Card from '../components/Card';

function Home({ searchValue, onChangeSearchInput, onAddItemCart, items }) {
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
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.trim().toLowerCase()))
          .map((card) => (
            <Card
              title={card.title}
              price={card.price}
              imageURL={card.imageURL}
              onClickPlus={onAddItemCart}
              key={card.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
