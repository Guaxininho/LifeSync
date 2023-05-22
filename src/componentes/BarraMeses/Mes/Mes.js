import "./Mes.scss";
import React from "react";

function Mes(props) {
  return (
    <div className="botaoMes">
      <h3>{props.mes}</h3>
    </div>
  );
}

export default Mes;
