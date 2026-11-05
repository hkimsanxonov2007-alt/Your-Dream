import { NavLink } from "react-router-dom";

function Sidebar({ setOpenMadal }) {
  function handleOpenModal() {
    console.log("Chaqirdi");
    setOpenMadal(true);
  }

  return (
    <div className="w-[20%] h-screen bg-mist-600 text-white  p-2">
      <h1 className="text-center text-4xl font-bold">Sidebar</h1>
      <ul className="w-full h-auto">
        <li className="w-full h-10 border flex justify-start items-center px-2 mt-2.5 rounded-lg">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="w-full h-10 border flex justify-start items-center px-2 mt-2.5 rounded-lg">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="w-full h-10 border flex justify-start items-center px-2 mt-2.5 rounded-lg">
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li className="w-full h-10 border flex justify-start items-center px-2 mt-2.5 rounded-lg">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <button
        onClick={handleOpenModal}
        className="w-full h-10 border flex justify-start items-center px-2 mt-2.5 rounded-lg"
      >
        Open Modall
      </button>
    </div>
  );
}
export default Sidebar;
