import incommodious from "../../public/incommodious.png";

export default function Navbar() {
  return (
    <div className="sm:mx-10 sm:my-6 mx-2 my-2 rounded-md absolute sm:w-[95%] left-0 right-0  px-2 py-2 flex justify-between w-[93%]">
      {/* Icon and game button */}
      <div className="flex justify-between space-x-16">
        <img className="w-10 h-10 sm:w-12 sm:h-12" src={incommodious} />
        <div className="bg-[#DFDFF2] w-28 h-10 my-auto content-center sm:flex hidden">
          <h1 className="font-semibold sm:text-sm font-mono hidden sm:flex sm:mx-auto sm:text-black sm:self-center sm:my-1  text-[#DFDFF2] ">
            PRODUCTS
          </h1>
        </div>
      </div>
      {/* Desktop View Navbar Right */}
      <div className="sm:flex justify-between space-x-16 py-2 hidden sm:visible">
        <h1 className="font-semibold font-mono  text-[#DFDFF2]">HOME</h1>
        <h1 className="font-semibold font-mono  text-[#DFDFF2]">ABOUT</h1>
        <h1 className="font-semibold font-mono  text-[#DFDFF2]">CONTACT</h1>
      </div>
      {/* Mobile View Navbar Right */}
      <div className="flex justify-between space-x-3 py-2 sm:hidden ">
        <h1 className="font-semibold font-mono  text-[#DFDFF2]">HOME</h1>
        <h1 className="font-semibold font-mono  text-[#DFDFF2]">=</h1>
      </div>
    </div>
  );
}
