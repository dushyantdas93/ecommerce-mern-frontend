import React from 'react'
import Phone from "/photos/phone.jpeg"
import google from "/photos/google1.jpeg";

const Login = () => {
  return (
    <div className="w-full container mx-auto  h-full flex justify-center py-32">
      <div className="w-1/3 h-full ">
        <img src={Phone} alt="" className="" />
      </div>
      <div className="w-1/3 h-full py- px-28 flex flex-col gap-5 pt-28">
        <h1 className="text-3xl font-semibold">Login in to Exclusive</h1>
        <h6 className="font-semibold">Enter your details below</h6>
        <form
          action=" "
          className="flex
              flex-col gap-9 pt-10 pb-5"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Email or phone Number"
            className="bg-none focus:outline-none border-b-2 focus:bg-none"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="bg-none focus:outline-none border-b-2 focus:bg-none"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-red-500 py-2 text-sm rounded-sm font-semibold w-1/3"
            >
              Log In
            </button>
            <a href="" className="text-red-500">
              Forgot Password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login