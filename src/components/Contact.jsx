import React from "react";
import linkedIn from "../assets/logo/linkedin.png";
import github from "../assets/logo/github.png";
import leetcode from "../assets/logo/leetcode.png";
import twitter from "../assets/logo/twitter.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/666735ff-5280-456c-9f4a-a47aa49ab6c3"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-1/2"></div>
          <div  className="flex items-center justify-between w-1/4 opacity-80" >
              <a href="https://www.linkedin.com/in/hemangarana/"><img
                src={linkedIn}
                alt=""
                height={30} width={30}
                className="rounded-md duration-200 hover:scale-105"
              /></a>
              <a href="https://github.com/Hemanga-Rana"><img
                src={github}
                alt=""
                height={30} width={30}
                className="rounded-md duration-200 hover:scale-105"
              /></a>
              <a href="https://leetcode.com/hemangarana/"><img
                src={leetcode}
                alt=""
                height={35} width={35}
                className="rounded-md duration-200 hover:scale-105"
              /></a>
              <a href="https://twitter.com/rana_hemanga"><img
                src={twitter}
                alt=""
                height={30} width={30}
                className="rounded-md duration-200 hover:scale-105"
              /></a>
          </div>
          <div className="w-1/2"></div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;