function Modal({ setOpenMadal }) {
  function handleonClose() {
    console.log("Chaqirdi");
    setOpenMadal(false);
  }

  return (
    <div className="w-full h-screen bg-black/70 absolute flex justify-center items-center">
      <div className="w-[50%] h-[50%] bg-white/90 rounded-2xl relative flex justify-center items-center">
        <button
          onClick={handleonClose}
          className="w-10 h-10 rounded-lg bg-gray-400 text-black absolute right-0 top-0 m-2 hover:text-white hover:bg-red-600 flex justify-center items-center"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h1>
          Tepadagi "<i class="fa-solid fa-xmark"></i>" shuni bosangiz o'chadi
        </h1>
      </div>
    </div>
  );
}
export default Modal;
