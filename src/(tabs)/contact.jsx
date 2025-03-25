import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        "service_49fc0bc",
        "template_VisualsbyAndy",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "bi_UHoK-E4BAGzpRc"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-[#A0522D] p-6">
      <div className="flex flex-col md:flex-row justify-around items-center p-6 w-full">
        {/* Left Section */}
        <div className="mt-16 md:mt-20 lg:pt-16 md:w-1/2 max-w-lg text-center md:text-left md:pr-10">
          <h1 className="text-4xl font-extrabold text-white leading-tight">
            {t("contact.title")}
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            {t("contact.description")}
          </p>
          <p className="mt-4 text-[#A0522D] text-lg italic font-semibold tracking-wide animate-pulse">
            💡 {t("contact.hook")}
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={handleSubmit} className="md:w-1/2 mt-6 md:mt-16 w-full">
          <div className="flex flex-col space-y-4">
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label className="text-sm text-gray-400">
                  {t("contact.firstNameLabel")}
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("contact.firstNamePlaceholder")}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                />
              </div>
              <div className="w-full mt-4 md:mt-0">
                <label className="text-sm text-gray-400">
                  {t("contact.lastNameLabel")}
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("contact.lastNamePlaceholder")}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">
                {t("contact.emailLabel")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-400">
                {t("contact.subjectLabel")}
              </label>
              <input
                type="text"
                name="subject"
                placeholder={t("contact.subjectPlaceholder")}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">
                {t("contact.messageLabel")}
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder={t("contact.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#A0522D] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#A0522D] text-white py-3 rounded-md hover:bg-[#8B4513] transition"
              disabled={loading}
            >
              {loading ? t("contact.sending") : t("contact.submit")}
            </button>

            {/* Success Message */}
            {isSent && (
              <p className="text-green-500 text-center mt-2">
                {t("contact.successMessage")}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
