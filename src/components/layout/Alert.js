import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert != null && (
      <div
        className={`alert alert-${alert.type}`}
        style={{ display: "block", width: "100%", margin: "1rem 0" }}
      >
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
