import React from 'react';

const workExperience = [
  {
    title: 'Full-Stack Developer with AI',
    org: 'Biyn Enterprises',
    location: 'Remote',
    date: 'September 2023 – Present',
    bullets: [
      'Built and deployed AI-integrated MVPs using React, Node.js, PostgreSQL, GPT, and Hugging Face models.',
      'Delivered user-centric web applications and proprietary tools like VISION AI and Smart Grocery Assistant.',
      'Led full-stack product development—from idea validation to deployment—using the MERN stack and cloud tools.',
      'Integrated custom AI workflows for automation and business logic enhancement.',
      'Consulted clients to deliver tailored dashboards and applications with continuous experimentation.'
    ]
  },
  {
    title: 'Robotics Mentor (Promoted to Team Lead)',
    org: 'Steam Academy',
    location: 'Dublin, Ireland',
    date: 'Aug 2024 - April 2025',
    bullets: [
      'Mentored students in robotics, algorithms, and STEAM innovation for competitions like RoboJam.',
      'Fostered problem-solving and technical collaboration among diverse learners.',
      'Prepared students with programming, hands-on building, and mentorship in engineering.'
    ]
  },
  {
    title: 'Full-Stack Developer',
    org: 'AppyStack Pvt Limited',
    location: 'Pune, India',
    date: 'April 2022 - April 2023',
    bullets: [
      'Built reusable React libraries and a no-code dynamic reporting system for hospitals.',
      'Developed scheduling and management applications to improve client profitability.',
      'Reduced testing and deployment time by 70% through mentorship and client collaboration.',
      'Led a development team and consulted on software architecture and database solutions.'
    ]
  },
  {
    title: 'Software Development Instructor',
    org: 'Codekul Pvt. Limited',
    location: 'Pune, India',
    date: 'Aug 2022 - Jan 2023',
    bullets: [
      'Trained students in full-stack technologies including React, Node.js, and SQL.',
      'Increased hiring rates by 200% through industry-relevant training and mentorship.',
      'Delivered certification-focused workshops and guided student-built applications.'
    ]
  }
];

const education = [
  {
    school: 'Dublin Business School',
    degree: "Master's in Data Analytics",
    year: '2024'
  },
  {
    school: 'Vishwakarma University',
    degree: 'Bachelor in Computer Science',
    year: '2021'
  },
  {
    school: 'Hof University',
    degree: 'Exchange Program - Computer Science',
    year: '2020'
  }
];

const certifications = [
  'Credential of Readiness – Harvard Business School Online',
  'Money Coach and Befriender – Christians Against Poverty',
  'Working towards Google Certification for Data Science and Big Data Analytics'
];

const volunteering = [
  {
    role: 'Lab Lead',
    place: 'FaithTech',
    description: 'At FaithTech, I serve as a Lab Lead, using technology to create impactful digital solutions for ministries and nonprofits around the world.'
  },
  {
    role: 'Treasurer',
    place: 'Meri Asha',
    description: 'As Treasurer at Meri Asha, I oversee financial strategy and stewardship to support the nonprofit’s mission of empowering underprivileged communities through education, employment, and access to basic services.'
  },
  {
    role: 'Money Coach and Befriender',
    place: 'Christians Against Poverty',
    description: 'As a Money Coach and Befriender with Christians Against Poverty, I provide financial education and one-on-one support to help individuals overcome debt and develop healthy money management habits.'
  }
];


export default function Experience() {
  return (
    <div id='experience' className='lg:text-left bg-[#F2F5F7] w-full min-h-screen px-4 md:px-8 lg:px-28 pt-8 md:pt-28 pb-12 md:pb-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-6 md:gap-y-6 lg:gap-y-12'>

      {/* ######### Work Experience ########### */}
      <div className='md:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left'>
          ― Work Experience
        </p>
      </div>

      {workExperience.map((exp, idx) => (
        <React.Fragment key={idx}>
          <div className='col-span-3 md:col-span-3'>
            <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>
              {exp.title}
            </p>
            <p className='font-medium text-cyan-950 text-xl md:text-2xl font-Playfair my-4'>
              {exp.org} / {exp.location} / {exp.date}
            </p>
            {exp.bullets.map((point, i) => (
              <p key={i} className='font-light text-cyan-950 text-lg font-Nunito mb-2'>
                {point}
              </p>
            ))}
          </div>
          <div className='md:col-span-2'></div>
        </React.Fragment>
      ))}

      {/* ######### Education ########### */}
      <div className='col-span-3 md:col-span-3'></div>
      <div className='md:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left'>
          ― Education
        </p>
      </div>

      {education.map((edu, idx) => (
        <React.Fragment key={idx}>
          <div className='col-span-3 md:col-span-3'>
            <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>{edu.school}</p>
            <p className='font-medium text-cyan-950 text-xl font-Playfair mb-4'>{edu.degree} / {edu.year}</p>
          </div>
          <div className='md:col-span-2'></div>
        </React.Fragment>
      ))}

      {/* ######### Certifications ########### */}
      <div className='col-span-3 md:col-span-3'></div>
      <div className='md:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left'>
          ― Certifications
        </p>
      </div>

      <div className='col-span-3 md:col-span-3'>
        {certifications.map((item, idx) => (
          <p key={idx} className='font-light text-cyan-950 text-lg font-Nunito mb-2'>
            {item}
          </p>
        ))}
      </div>
      <div className='md:col-span-2'></div>

      {/* ######### Volunteering ########### */}
      <div className='col-span-3 md:col-span-3'></div>
      <div className='md:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left'>
          ― Volunteering
        </p>
      </div>

      <div className='col-span-3 md:col-span-3'>
      {volunteering.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className='col-span-3 md:col-span-3 mb-8'>
            <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>{item.role}</p>
            <p className='font-medium text-cyan-950 text-xl font-Playfair mb-4'>{item.place}</p>
            <p className='font-light text-cyan-950 text-lg font-Nunito'>{item.description}</p>
          </div>
          {/* <div className='md:col-span-2'></div> */}
        </React.Fragment>
      ))}
      </div>
    </div>
  );
}
