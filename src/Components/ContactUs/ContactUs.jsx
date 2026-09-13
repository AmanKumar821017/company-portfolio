import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../../assets/Contact.webp";

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.name.value.trim()) {
      setError("Please enter your name");
      return;
    }

    const email = form.email.value.trim();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!form.phone.value.trim()) {
      setError("Please enter your phone number");
      return;
    }

    if (!form.service.value) {
      setError("Please select a service");
      return;
    }

    if (!form.message.value.trim()) {
      setError("Please enter your message");
      return;
    }

    // setError("");

    emailjs
      .sendForm(
        "service_l9qa3ha",
        "template_f2av38l",
        form,
        "JjIuxUKrJq2JzhtUd"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
        setSelectedService("");
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="w-full min-h-screen bg-blue-950 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
          Get In Touch
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 mt-4 sm:mt-6 max-w-3xl mx-auto">
          Let's discuss how we can transform your ideas into impactful digital
          solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="hidden md:block h-full rounded-2xl overflow-hidden">
          <img
            src={img}
            alt="contact"
            className="w-full h-full object-cover"
          />
        </div>

        <form
          noValidate
          onSubmit={sendEmail}
          className="border-2 border-white/40 rounded-2xl p-5 sm:p-6 md:p-8 text-white flex flex-col gap-4 sm:gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="* Your Name"
            onChange={() => setError("")}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="* Email Address"
            onChange={() => setError("")}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="phone"
            placeholder="* Phone Number"
            maxLength={10}
            onChange={() => setError("")}
            required
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            className="w-full p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-blue-500"
          />

          <select
            name="service"
            value={selectedService}
            onChange={(e) => {
              setSelectedService(e.target.value);
              setError("");
            }}
            required
            className={`w-full p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-blue-500 ${selectedService ? "text-white" : "text-slate-400"
              }`}
          >
            <option value="" disabled hidden>
              * Service Required
            </option>

            <option value="Web Development" className="text-black">
              Web Development
            </option>

            <option value="SEO Optimization" className="text-black">
              SEO Optimization
            </option>

            <option value="UI/UX Design" className="text-black">
              UI/UX Design
            </option>

            <option value="Data Analytics" className="text-black">
              Data Analytics
            </option>

            <option value="Other" className="text-black">
              Other
            </option>
          </select>

          <textarea
            name="message"
            placeholder="* Your Message"
            onChange={() => setError("")}
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-blue-500 resize-none"
          />
          {
            error && (
              <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-center">
                {error}
              </div>
            )
          }

          <button
            type="submit"
            className="w-full sm:w-40 mx-auto bg-blue-600 hover:bg-blue-700 cursor-pointer py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;