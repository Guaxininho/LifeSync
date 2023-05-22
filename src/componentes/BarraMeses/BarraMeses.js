import "./BarraMeses.scss";
import React from "react";
import Mes from "./Mes/Mes";

function BarraMeses() {
  return (
    <figure className="barraMeses">
      <Mes mes="Jan" />
      <Mes mes="Fev" />
      <Mes mes="Mar" />
      <Mes mes="Abr" />
      <Mes mes="Mai" />
      <Mes mes="Jun" />
      <Mes mes="Jul" />
      <Mes mes="Ago" />
      <Mes mes="Set" />
      <Mes mes="Out" />
      <Mes mes="Nov" />
      <Mes
        mes="Dez
      "
      />
    </figure>
  );
}

export default BarraMeses;
