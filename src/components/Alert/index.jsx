function Alert({ alerts = [] }) {
  return (
    <div className="alert-tray d-flex">
      {alerts.map((alert, index) => (
        <div className="alert d-flex align-center justify-center" key={`${alert}_${index}`}>
          <p>{alert}</p>
        </div>
      ))}
    </div>
  );
}

export default Alert;
