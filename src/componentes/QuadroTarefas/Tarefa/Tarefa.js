import "./Tarefa.scss";
import React from "react";

function Tarefa(props) {
  return (
    <div className="cardTarefa">
      <figure className="CardData">
        <h3>Dia</h3>
        <h2>{props.data}</h2>
      </figure>
      <div className="CardtituloFlex">
        <img src={props.estrela} alt="promessa" />
        <h1 className="CardTitulo">{props.titulo}</h1>
      </div>
      <p className="CardDetalhes">{props.descricao}</p>
      <a className="CardLink" href="www.google.com">
        Link
      </a>
    </div>
  );
}

export default Tarefa;
