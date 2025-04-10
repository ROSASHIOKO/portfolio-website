"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "shiokorosa0@gmail.com", // replace with your destination email
        subject: `${subject} (from ${email})`,
        text: message,
      }),
    });

    const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      form.reset();

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">My Contacts</h2>
        <div className="mb-6">
          <h5 className="text-xl font-bold text-black my-2">Address</h5>
          <p className="text-black">Mombasa,Kenya</p>
        </div>
        <div className="mb-6">
          <h5 className="text-xl font-bold text-black my-2">Phone</h5>
          <p className="text-black">+254 751466088</p>
        </div>
        <div className="socials flex flex-row gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <FaLinkedin size={32} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <FaTwitter size={32} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <FaInstagram size={32} />
          </a>
        </div>
      </div>

      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-black">Your Email</label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="johndoe@example.com"
            className="border border-gray-300 p-2 rounded"
          />
          <label htmlFor="subject" className="text-black">Subject</label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Just say anything"
            className="border border-gray-300 p-2 rounded"
          />
          <div className="mb-6">
            <label htmlFor="message" className="text-black mb-2 block">Message</label>
            <textarea
              name="message"
              id="message"
              required
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Write your message here"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 w-full rounded-full bg-black hover:bg-gray-800 text-white border border-black mt-3"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;