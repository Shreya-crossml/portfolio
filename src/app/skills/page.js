import React from 'react';

export default function Skills() {
  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "OpenAI API",
  ];

  return (
    <section className="bg-black py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <p className="text-black font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
