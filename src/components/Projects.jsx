import React from 'react';

const projects = [
  {
    title: 'Smart Grocery Assistant',
    context: 'Biyn Enterprises – AI MVP',
    tech: 'React, Node.js, PostgreSQL, GPT',
    description:
      'AI-powered assistant that auto-generates smart grocery lists and meal plans based on user preferences.',
    demoLink: 'https://chatgpt.com/g/g-681636e7b6f4819198dbd96452772a70-smart-grocery-inventory-assistant',
    repoLink: '',
    documentationLink: ''
  },
  {
    title: 'VISION AI',
    context: 'Biyn Enterprises – Internal Tool',
    tech: 'React, Hugging Face, GPT, Python',
    description:
      'Custom AI tool designed for text/image analysis and decision support, built for client demos and internal use.',
    demoLink: 'https://chatgpt.com/g/g-6824a18f15b88191a5959e227f6bea61-vision-ai',
    repoLink: 'https://github.com/DavidNinan-cloud/The-Notebook-V3.git',
    documentationLink: ''
  },
  {
    title: 'Thesis on ML vs Deep Learning using Sentiment Analysis',
    context: 'Dublin Business School Thesis',
    tech: 'Python, R, PyTorch, TensorFlow, Scikit-learn',
    description:
      'Comparative analysis of ML vs Deep Learning on Twitter sentiment data using NLP pipelines, BoW, TF-IDF, and SGD.',
    demoLink: '',
    repoLink: '',
    documentationLink: 'https://drive.google.com/file/d/1k94KLQrD05cJ872_ZtcLHqQ2So7SCIrA/view?usp=drive_link'
  },
  {
    title: 'Banking Data Warehouse',
    context: 'Dublin Business School',
    tech: 'SSIS, Tableau, SQL, Star Schemas',
    description:
      'Designed a relational data warehouse and ETL pipeline for financial KPI analysis and audit-compliant reporting.',
    demoLink: 'https://biyn-investments.netlify.app/',
    repoLink: 'https://github.com/DavidNinan-cloud/Netlify-Private',
    documentationLink: ''
  },
  {
    title: 'No-Code Dynamic Reporting System',
    context: 'Appystack Pvt Limited',
    tech: 'React, PostgreSQL, Node.js',
    description:
      'Developed a drag-and-drop report builder for hospitals, reducing manual work and increasing operational efficiency.',
    demoLink: '',
    repoLink: '',
    documentationLink: ''
  },
];

export default function Projects() {
  return (
    <div id="projects" className="bg-white w-full px-4 md:px-8 lg:px-24 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-950 mb-8 uppercase">
        ― Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-md p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-[#462B58] mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2 italic">{project.context}</p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Tech:</strong> {project.tech}
            </p>
            <p className="text-md text-cyan-950 font-light">
              {project.description}
            </p>
            <div className="flex space-x-4 mt-4 justify-center">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline font-semibold"
                >
                  View Demo
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline font-semibold"
                >
                  View Code
                </a>
              )}
              {project.documentationLink && (
                <a
                  href={project.documentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline font-semibold"
                >
                  Documentation
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
