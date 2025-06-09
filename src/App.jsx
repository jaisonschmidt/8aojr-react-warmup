import { useState } from "react";
import { Header } from "./components/Header";

export function App(){
  const [tasks, setTasks] = useState([]);

  const handleTasks = () => {
    // fazer uma chamada para uma api
    // receber os dados
    // alterar o valor de tasks
    setTasks([
      { id: 1, title: "Tarefa 01" },
      { id: 2, title: "Tarefa 02" },
      { id: 3, title: "Tarefa 03" },
      { id: 4, title: "Tarefa 04" },
    ]);
  }

  return (
    <>
      <Header />
      <h2>Lista de tarefas</h2>
      <button onClick={handleTasks}>Definir tasks</button>
      {tasks.length === 0 && <div>Nenhuma task</div>}
      {tasks.length > 0 && tasks.map( (task) => <div key={task.id}>{task.title}</div> )}
    </>
  );
}