'use client'
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aee240f9-4711-4f6f-b35b-5019dd5889f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form submitted successfully")
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Error submitting form");
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch </h2>
      <p className="text-center mx-auto mb-12 mt-5  max-w-2xl font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below
      </p>
      <form onSubmit={onSubmitHandler} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your emial"
            name="email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
        ></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit"
        >
          Submit Now
          <Image src={assets.right_arrow_white}  alt="arrow button" className="w-4"/>
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
