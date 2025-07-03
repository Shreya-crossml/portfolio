import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="min-h-screen bg-black py-12 px-6 md:px-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Me</h2>

        <form className="space-y-4 p-5 rounded bg-white">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-black p-3 rounded focus:outline focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}
