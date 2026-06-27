import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { RiReplyLine } from "react-icons/ri";

const UserProfile = () => {
  return (
    <div className="w-100 h-[50vh] bg-blue-300 m-5">
      <div className="flex justify-center items-center h-50">
        <div className="size-25 bg-amber-400 rounded-full flex justify-center items-center">image</div>
      </div>

      <div className="bg-white flex items-center flex-col">
        <div className="text-3xl font-semibold mt-4" >codingLab</div>

        <div className="text-2xl mt-3">Youtuber & Blogger</div>

        <div className="mt-3">
          <button><FaFacebook className="size-12 cursor-pointer m-3" /></button>
          <button><FaTwitter className="size-12 cursor-pointer m-3"/></button>
          <button><FaInstagramSquare className="size-12 cursor-pointer m-3"/></button>
          <button><FaYoutube className="size-12 cursor-pointer m-3"/></button>
        </div>

        <div className="mt-3">
          <button className="bg-blue-600 text-white text-2xl rounded-4xl p-4 m-2 cursor-pointer">Subscribe</button>
          <button className="bg-blue-600 text-white text-2xl rounded-4xl p-4 m-2 cursor-pointer">Message</button>
        </div>

        <div className="flex items-center mt-3">
          <button><FcLikePlaceholder className="size-12 cursor-pointer m-3"/></button> |
          <button><FaRegComment className="size-12 cursor-pointer m-3"/></button> |
          <button><RiReplyLine className="size-12 cursor-pointer m-3"/></button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
