import { useRef, useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ButtonGreen from '../ButtonGreen';

function Drawer({ onRemove, setCartOpened, drawerRef, items = [] }) {
  const [overlayRender, setOverlayRender] = useState(false);
  const nodeRef = useRef(null);

  // Таймер на изначальное включение анимации Корзины
  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayRender(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Проверка выключения корзины для запуска таймера анимации
  useEffect(() => {
    if (!overlayRender) {
      const timer = setTimeout(() => {
        setCartOpened(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [overlayRender, setCartOpened]);

  return (
    <div ref={drawerRef} className="overlay">
      <TransitionGroup>
        {overlayRender && (
          <CSSTransition timeout={300} nodeRef={nodeRef} classNames="drawer">
            <div ref={nodeRef} className="drawer d-flex flex-column">
              <h2 className="d-flex justify-between mb-30">
                Корзина
                <img
                  onClick={() => setOverlayRender(false)}
                  className="btn-remove"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </h2>

              <div className="items flex">
                {items.map(({ title, price, imageURL, id }, index) => (
                  <div
                    className="cart-item d-flex align-center mb-20"
                    key={`${title}_${id}_${index}`}>
                    <div
                      className="cart-item--img mr-20"
                      style={{ backgroundImage: `url(${imageURL})` }}></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{title}</p>
                      <b>{price.toLocaleString()} руб.</b>
                    </div>

                    <img
                      onClick={() => onRemove(id)}
                      className="btn-remove"
                      src="/img/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                ))}
              </div>

              <div className="cart-total-block">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                {/* <button className="green-button">
                  Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
                </button> */}
                <ButtonGreen title="Оформить заказ" isReverse={false} />
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Drawer;
