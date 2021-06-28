import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ title, price, imageURL }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleOnClickPlus = () => {
    setIsAdded(!isAdded);
  };

  // Для отслеживания изменения переменных, переданных в массив
  // useEffect(() => {
  //   console.log('changed');
  // }, [isAdded]);

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
        <img
          className="cu-p"
          onClick={handleOnClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="btn"
        />
      </div>
    </div>
  );
}

export default Card;
