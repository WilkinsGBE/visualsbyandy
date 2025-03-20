import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-[#A0522D] p-6">
      <div className="flex flex-col  md:flex-row justify-around items-center p-6 w-full">
        {/* Left Section - Heading and Text */}
        <div className="mt-15 md:w-1/2 text-center md:text-left md:mt-0">
          <h1 className="text-3xl font-bold text-white">
            Hosting an Event Soon?
          </h1>
          <p className="text-gray-300 mt-2">
            Tell us about your upcoming event using the contact form, and our
            team will reach out to you shortly!
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <form action="" className="md:w-1/2 mt-6 md:mt-0 w-full">
          <div className="flex flex-col space-y-4">
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label className="text-sm text-gray-400">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                />
              </div>
              <div className="w-full mt-4 md:mt-0">
                <label className="text-sm text-gray-400">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-400">Subject</label>
              <input
                type="text"
                placeholder="Wedding coming soon!"
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="4"
                placeholder="Hi Andy, I would like to book you for my event..."
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#A0522D] text-white py-3 rounded-md hover:bg-[#8B4513] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
