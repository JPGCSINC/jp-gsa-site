"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-[#b72c30]">Contact Us</h1>
      {submitted ? (
        <p className="text-green-700 font-semibold">Thank you! Your message has been sent.</p>
      ) : (
        <form
          className="space-y-4"
          action="https://formspree.io/f/xqkrlqog"
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="text" name="name" placeholder="Name" className="w-full p-2 border border-[#1f4f8a] rounded" required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-[#1f4f8a] rounded" required />
          <textarea name="message" placeholder="Your message" className="w-full p-2 border border-[#1f4f8a] rounded h-32" required />
          <button type="submit" className="px-4 py-2 bg-[#d8cc46] text-black rounded">Send</button>
        </form>
      )}
    </div>
  );
}
