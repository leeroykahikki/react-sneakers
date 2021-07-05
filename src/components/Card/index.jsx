import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ title, price, imageURL, onAddItemCart }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnAddItemCart = () => {
    setIsLoading(true);
    onAddItemCart({ title, price, imageURL }, setIsLoading);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-liked.svg" alt="Liked" />
        {/* <img src="/img/heart-unliked.svg" alt="Unliked" /> */}
      </div>
      <img width={133} height={112} src={imageURL} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price.toLocaleString()} руб.</b>
        </div>
        <div
          className={`${styles['btn-add']} ${
            isLoading ? styles.progress : ''
          } d-flex align-center justify-center`}>
          {isLoading ? (
            <div className="loader" />
          ) : (
            <img
              className={styles.plus}
              onClick={handleOnAddItemCart}
              src="/img/btn-plus.svg"
              alt="btn"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
