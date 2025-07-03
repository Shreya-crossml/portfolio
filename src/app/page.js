import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-black text-gray-800 p-4 mb-8">
        <div>
          <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
              <div className="justify-center">
                <Image
                  src="/Profile.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-100 h-100 mx-auto rounded-full mb-6 border-4 border-blue-500"
                />
              </div>
              <div className="justify-center">
                <h2 className="text-amber-50 text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-amber-50 text-xl leading-relaxed">
                  {"Hi, I'm a passionate Full-Stack AI Developer with a deep interest in creating intelligent, user-focused applications that combine the best of software engineering and artificial intelligence. I enjoy building systems that think, learn, and interact—from backend architectures to modern frontends, and from raw data pipelines to production-ready machine learning models. With a background in both AI research and full-stack web development, I thrive at the intersection of data, design, and deployment. My work spans across training deep learning models, building robust APIs, and creating elegant front-end experiences that bring AI to life. What drives me is not just the technology itself, but the impact it creates—whether it's automating workflows, enabling smarter decision-making, or crafting immersive AI-powered user interfaces."}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
