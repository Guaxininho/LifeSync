import React from "react";
import "./Formulario.scss";

function Formulario() {
  return (
    <form className="form">
      <div className="formCampo">
        <label htmlFor="nome">compromisso</label>
        <input id="nome" type="text"></input>
      </div>
      <div className="formCampo">
        <label htmlFor="detalhes">detalhes</label>
        <textarea row="5" id="detalhes" type="text"></textarea>
      </div>
      <div className="formCampo">
        <label htmlFor="data">Data</label>
        <input id="data" type="date"></input>
      </div>
      <div className="formCampo">
        <label htmlFor="link">Link (opcional)</label>
        <input id="link" type="text"></input>
      </div>
      <select className="formSelect">
        <option>Extremamente importante</option>
        <option>Normal</option>
        <option>Totalmente opcional</option>
      </select>
      <div className="formCampo Anexo">
        <label htmlFor="imagem">Anexo</label>
        <input id="imagem" type="file" multiple></input>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
