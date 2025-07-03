import React from 'react'

export default function Experience() {
  return (
    <div>
       <section className="min-h-screen bg-black py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Experience</h2>

        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-black mb-1">Data Science Intern</h3>
          <p className="text-black mb-2">XYZ Analytics Pvt. Ltd. · Jan 2024 – June 2024</p>
          <p className="text-black mb-4">
            Worked on predictive modeling, data preprocessing, and dashboard creation for business insights.
            Contributed to data cleaning pipelines and model evaluation for real-world datasets.
          </p>
          <ul className="list-disc list-inside text-black space-y-2">
            <li>Built regression and classification models using Python and scikit-learn</li>
            <li>Visualized key business metrics with Matplotlib and Seaborn</li>
            <li>Cleaned and transformed large datasets using Pandas and NumPy</li>
            <li>Collaborated with senior data scientists in weekly sprints</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}
