function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items flex">
          {items.map(({ title, price, imageURL, id }, index) => (
            <div className="cart-item d-flex align-center mb-20" key={`${id}`}>
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
          <button className="green-button">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
