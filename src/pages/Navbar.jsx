import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Navab = () => {
  return (
    <div className="container mx-auto px-40 bg-white flex justify-around items-center  pb-5 pt-10 border-b-2">
      <h1 className='text-3xl font-bold'>Exclusive</h1>
      <div className="w-1.5/5 px-5 flex gap-10 font-semibold">
        {["home", "contact", "about", "sign Up"].map((item) => {
          return (
            <a href="" className="capitalize hover:underline">
              {item}
            </a>
          );
        })}
      </div>
      <div className="">
        <div className=" border rounded-xs flex gap-2 items-center  text-sm pr-2 bg-gray-200">
          <input
            type="text"
            className=" px-3 bg-gray-200 py-1 w-46 focus:outline-none cursor-pointer"
            placeholder="What are you looking for? "
          />
          <IoSearchOutline size={18} className='cursor-pointer text-black font-bold'/>
        </div>
      </div>
    </div>
  );
}

export default Navab