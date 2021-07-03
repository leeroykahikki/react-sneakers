import { useState, useEffect, useRef } from 'react';
import { Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import axios from 'axios';
import Alert from './components/Alert';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [cartOpened, setCartOpened] = useState(false); // Состояние корзины
  const [searchValue, setSearchValue] = useState(''); // Поиск
  const [cartItems, setCartItems] = useState([]); // Товары в корзине
  const [items, setItems] = useState([]); // Товары

  const drawerRef = useRef(null); // Анимация корзины

  // Изначальный запрос к БД
  useEffect(() => {
    axios.get('https://60da8c89801dcb00172909d9.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    axios.get('https://60da8c89801dcb00172909d9.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  // Добавление товаров в корзину
  const handleOnAddItemCart = (items) => {
    axios.post('https://60da8c89801dcb00172909d9.mockapi.io/cart', items).then((res) => {
      setCartItems((prev) => [...prev, res.data]);
    });
  };

  // Удаление товаров из корзины
  const handleOnRemoveItemCart = (id) => {
    axios.delete(`https://60da8c89801dcb00172909d9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Обработка поиска
  const handleOnChangeSearchInput = (event) => {
    event.target.value.trim() ? setSearchValue(event.target.value.trimStart()) : setSearchValue('');
  };

  return (
    <div className="wrapper clear">
      <Alert />
      <TransitionGroup>
        {cartOpened && (
          <CSSTransition nodeRef={drawerRef} timeout={300} classNames="overlay">
            <Drawer
              onRemove={handleOnRemoveItemCart}
              setCartOpened={setCartOpened}
              items={cartItems}
              drawerRef={drawerRef}
            />
          </CSSTransition>
        )}
      </TransitionGroup>

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
