import "./QuadroTarefas.scss";
import React from "react";
import Tarefa from "./Tarefa/Tarefa";
import amarelo from "./estrelaAmarela.png";
import vermelho from "./estrelaVermelha.png";
import verde from "./estrelaVerde.png";

const tarefas = [
  {
    estrela: amarelo,
    titulo: "Limpar o quarto",
    descricao: "Remover a louça e a roupa suja e organizar as coisas",
    data: 12,
  },
];

function QuadroTarefas() {
  return (
    <section className="QuadroTarefas">
      <Tarefa
        estrela={tarefas[0].estrela}
        titulo={tarefas[0].titulo}
        descricao={tarefas[0].descricao}
        data={tarefas[0].data}
      />
      <Tarefa estrela={vermelho} />
      <Tarefa estrela={verde} />
    </section>
  );
}

export default QuadroTarefas;
