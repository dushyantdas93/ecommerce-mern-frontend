import React from 'react'
import playStore from "/photos/playStore.webp"
import { MdSend } from "react-icons/md";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import scaner from "/photos/scaner.png"

const Footer = () => {
  return (
    <div className="w-full bg-black text-white ">
      <div className="w-ful4 flex justify-center gap-16  py-14 ">
        <div className=" flex flex-col gap-4" id="">
          <h1 className="text-2xl font-semibold  ">Exclusive</h1>
          <h1 className="text-lg font-semibold ">Subscribe</h1>
          <h3 className="text-sm">Get 10% off your first order</h3>
          <div className="flex gap-2 text-gray-400 border px-1 border-gray-400 rounded-sm items-center justify-center py-2">
            <input
              type="text"
              className="bg-black focus:outline-none rounded-sm w-28 "
              placeholder="Enter your email"
            />
            <MdSend className="cursor pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/12" id="">
          <h1 className="text-xl font-semibold ">Support</h1>
          {[
            "111 Bijay sarani,Dhaka DH 1515, Bangladesh.",
            "exclusive@gmail.com",
            "+91 9302686679",
          ].map((item) => {
            return <h1>{item} </h1>;
          })}
        </div>
        <div className="flex flex-col gap-4" id="">
          <h1 className="text-xl font-semibold ">Account</h1>
          {["My account", "Login / register", "cart", "wishlist", "shop"].map(
            (item) => {
              return <h1>{item} </h1>;
            }
          )}
        </div>
        <div className="flex flex-col gap-4" id="">
          <h1 className="text-xl font-semibold ">Quick Link</h1>
          {["Privacy Policy", "Term of Use", "FAQ", "Contact"].map((item) => {
            return <h1>{item} </h1>;
          })}
        </div>
        <div className="flex flex-col gap-4" id="">
          <h1 className="text-2xl font-semibold ">Download App</h1>
          <h4 className="text-xs text-gray-400">
            save $3 with App New User Only
          </h4>
          <div className=" flex gap-2">
            <div className="size-20 border">
              <a href="">
                <img src={scaner} alt="" />
              </a>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <a href="" className="w-24 border rounded-sm">
                <img src={playStore} className="object-cover" />
              </a>
              <a href="" className="w-24 border rounded-sm">
                <img src={playStore} className="object-cover" />
              </a>
            </div>
          </div>
          <div className="flex  px-5 items-center w-full  gap-4">
            <a href="">
              <RiFacebookLine size={24} />
            </a>
            <a href="">
              <CiTwitter size={24} />
            </a>
            <a href="">
              <FaInstagram size={24} />
            </a>
            <a href="">
              <IoLogoLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className=" text-gray-700  text-sm flex items-center justify-center gap-2 border-t">
        <span className="text-lg"> © </span>Copyrights Rimel 2025. All right
        reserved
      </div>
    </div>
  );
}

export default Footer