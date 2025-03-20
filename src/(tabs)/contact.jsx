import React from "react";

const contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-[#A0522D]">
      <div className="flex flex-row space-x-4">
        <div>
          <h1>You have an event coming soon ?</h1>
        </div>
        <form action="">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row">
              <label htmlFor="" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              />
              <label htmlFor="" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              />
            </div>
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
            />
            <label htmlFor="" className="text-sm">
              Subject
            </label>
            <input
              type="text"
              placeholder="Wedding coming soon !"
              className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
            />
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              placeholder="Hi Andy, I would like to book you for my event..."
            ></textarea>
          </div>
          <button type="submit" className="bg-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
