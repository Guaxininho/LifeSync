import "./QueDia.scss";
import React from "react";
import Mais from "./mais.png";

function QueDia() {
  return (
    <figure className="cardQueDia">
      <p>Hoje é dia 21/05</p>
      <img src={Mais} alt="adicionar"></img>
    </figure>
  );
}

export default QueDia;
