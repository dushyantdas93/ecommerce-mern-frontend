import React from "react";
import Phone from "/photos/phone.jpeg";
import google from "/photos/google1.jpeg";

const Register = () => {
  return (
    <div className="w-full container mx-auto  h-full flex justify-center py-32">
      <div className="w-1/3 h-full ">
        <img src={Phone} alt="" className="" />
      </div>
      <div className="w-1/3 h-full pt-2 px-28 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Create an account</h1>
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
            placeholder="Name"
            className="bg-none focus:outline-none border-b-2 focus:bg-none"
          />
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
          <button
            type="submit"
            className="bg-red-500 py-2 text-sm rounded-sm font-semibold"
          >
            Create Account
          </button>
        </form>
        <button className=" border  py-2 text-sm rounded-sm font-semibold w-full flex items-center justify-center gap-1">
          <img src={google} alt="" className="h-6" />
          Sign Up with Google
        </button>

        <div className=" flex gap-3 text-sm justify-center">
          <h1>Don't have account?</h1>
          <a href="" className=" text-red-600 font-semibold underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
