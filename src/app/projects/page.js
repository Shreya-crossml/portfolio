import React from 'react'

export default function Projects() {
  return (
    <div className='bg-black'>
        <section className="min-h-screen bg-black py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-20 text-center">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-black mb-2">AI Chatbot Assistant</h3>
            <p className="text-black mb-3">
              Built with <span className="font-medium ">Next.js</span>,{' '}
              <span className="font-medium ">OpenAI API</span>, and{' '}
              <span className="font-medium ">Tailwind CSS</span>. This project enables users to chat with a GPT-powered assistant for various tasks like Q&A and summarization.
            </p>
            <ul className="list-disc list-inside text-black mb-4">
              <li>GPT-powered text generation</li>
              <li>Real-time chat interface</li>
              <li>Mobile responsive UI</li>
            </ul>
            
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-black mb-2">AI-Powered Invoice Generator</h3>
            <p className="text-black mb-3">
              A full-stack invoice builder using <span className="font-medium ">React</span>,{' '}
              <span className="font-medium">Firebase</span>, and{' '}
              <span className="font-medium ">PDFKit</span>. Automatically calculates totals, generates PDFs, and saves invoice history.
            </p>
            <ul className="list-disc list-inside text-black mb-4">
              <li>PDF invoice export</li>
              <li>Firebase integration</li>
              <li>Dynamic item rows</li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
