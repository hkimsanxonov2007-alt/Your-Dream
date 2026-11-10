import { useEffect, useState } from "react";

function About() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      let usersTodos = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      ).then((dota) => dota.json());
      setTodos(usersTodos);
    }
    getTodos();
  }, []);

  return (
    <div className="flex flex-col gap-2.5 h-screen  overflow-scroll">
      <h1 className="text-center text-3xl font-bold">Todos</h1>
      <table>
        <thead>
          <tr>
            <th className="border border-gray-500">№</th>
            <th className="border border-gray-500">Title</th>
            <th className="border border-gray-500">Completed/Id</th>
            <th className="border border-gray-500">Id</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td className="border border-gray-500">{index + 1}</td>
                <td className="border border-gray-500">{todo.title}</td>
                <td className="border border-gray-500">{todo.userId}</td>
                <td className="border border-gray-500">{todo.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default About;
