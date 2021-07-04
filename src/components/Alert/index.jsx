import styles from './Alert.module.scss';

function Alert({ alerts = [] }) {
  return (
    <div className={`${styles['alert-tray']} d-flex`}>
      {alerts.map((alert, index) => (
        <div
          className={`${styles['alert']} d-flex align-center justify-center`}
          key={`${alert}_${index}`}>
          <p>{alert}</p>
        </div>
      ))}
    </div>
  );
}

export default Alert;
