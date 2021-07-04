import styles from './ButtonGreen.module.scss';

function ButtonGreen({ title, isReverse }) {
  console.log(styles);
  return (
    <button className={styles['green-button']}>
      {isReverse && <img className={styles['arrow-reverse']} src="/img/arrow.svg" alt="arrow" />}
      {title}
      {!isReverse && <img className={styles.arrow} src="/img/arrow.svg" alt="arrow" />}
    </button>
  );
}

export default ButtonGreen;
