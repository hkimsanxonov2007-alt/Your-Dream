import { useEffect, useState } from "react";

function Services() {
  const [coments, setComents] = useState([]);

  useEffect(() => {
    async function getComments() {
      let usersComment = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
      ).then((cam) => cam.json());
      setComents(usersComment);
    }
    getComments();
  }, []);

  return (
    <div className="flex flex-col gap-2.5 ">
      <h1 className="text-center text-3xl font-bold">Comments</h1>
      <table>
        <thead>
          <tr>
            <th className="border border-stone-400">№</th>
            <th className="border border-stone-400">Name</th>
            <th className="border border-stone-400">Email</th>
            <th className="border border-stone-400">Id</th>
          </tr>
        </thead>
        <tbody>
          {coments.map((comm, index) => {
            return (
              <tr key={index}>
                <td className="border border-stone-400">{index + 1}</td>
                <td className="border border-stone-400">{comm.name}</td>
                <td className="border border-stone-400">{comm.email}</td>
                <td className="border border-stone-400">{comm.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Services;
