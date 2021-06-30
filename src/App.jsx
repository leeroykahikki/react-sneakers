import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
const axios = require('axios');

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  // Через axios
  useEffect(() => {
    axios.get('https://60da8c89801dcb00172909d9.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    axios.get('https://60da8c89801dcb00172909d9.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  // Через fetch
  // useEffect(() => {
  //   fetch('https://60da8c89801dcb00172909d9.mockapi.io/items')
  //     .then((res) => res.json())
  //     .then((json) => setItems(json));
  // }, []);

  const handleOnAddItemCart = (items) => {
    axios.post('https://60da8c89801dcb00172909d9.mockapi.io/cart', items);
    setCartItems((prev) => [...prev, items]);
  };

  const handleOnRemoveItemCart = (id) => {
    axios.delete(`https://60da8c89801dcb00172909d9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOnChangeSearchInput = (event) => {
    event.target.value.trim() ? setSearchValue(event.target.value.trimStart()) : setSearchValue('');
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          onRemove={handleOnRemoveItemCart}
          items={cartItems}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          searchValue={searchValue}
          onChangeSearchInput={handleOnChangeSearchInput}
          onAddItemCart={handleOnAddItemCart}
          items={items}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites
          searchValue={searchValue}
          onChangeSearchInput={handleOnChangeSearchInput}
          onAddItemCart={handleOnAddItemCart}
          items={items}
        />
      </Route>
    </div>
  );
}

export default App;