import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let usersData = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      ).then((data) => data.json());
      setUsers(usersData);
    }
    getUsers();
  }, []);

  return (
    <div className="flex flex-col gap-2.5 ">
      <h1 className="text-center text-3xl font-bold">Users</h1>
      <table>
        <thead>
          <tr>
            <th className="border border-stone-400">№</th>
            <th className="border border-stone-400">Ism/Familya</th>
            <th className="border border-stone-400">Username</th>
            <th className="border border-stone-400">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td className="border border-stone-400">{index + 1}</td>
                <td className="border border-stone-400">{user.name}</td>
                <td className="border border-stone-400">{user.username}</td>
                <td className="border border-stone-400">{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
