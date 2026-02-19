import React from 'react';

const workExperience = [
  {
    title: 'Generative AI Developer',
    info:"(Co-Founder)",
    org: 'Biyn Enterprises Pvt Limited',
    location: 'Remote',
    date: 'September 2023 – Present',
    bullets: [
      'Built and deployed AI-integrated MVPs using Python, React, Node.js, PostgreSQL, GPT, and Hugging Face models.',
      'Delivered user-centric web applications and proprietary tools like VISION AI and Smart Grocery Assistant.',
      'Led full-stack product development—from idea validation to deployment',
      'Integrated custom AI workflows for automation and business logic enhancement.',
      'Consulted clients to deliver tailored dashboards and applications with continuous experimentation.'
    ]
  },
  {
    title: 'Robotics Mentor',
    info:"(Promoted to Team Lead)",
    org: 'Steam Academy Pvt Limited',
    location: 'Dublin, Ireland',
    date: 'August 2024 - April 2025',
    bullets: [
      'Mentored students in robotics, algorithms, and STEM innovation for competitions like RoboJam.',
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
    date: 'August 2022 - Jan 2023',
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
    year: 'September 2023 - October 2024'
  },
  {
    school: 'Vishwakarma University',
    degree: 'Bachelor in Computer Science',
    year: 'June 2018 - July 2021'
  },
  {
    school: 'Hof University',
    degree: 'Exchange Student - Computer Science',
    year: 'January 2020 - August 2020'
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
    <div id='experience' className='lg:text-left bg-[#F2F5F7] w-full min-h-screen px-4 md:px-8 lg:px-28 pt-8 md:pt-28 pb-12 
    md:pb-48 lg:grid lg:grid-cols-5 gap-y-6 md:gap-y-6 lg:gap-y-12'>

      {/* ######### Work Experience ########### */}
      <div className='lg:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito text-center lg:text-left'>
          ― Work Experience
        </p>
      </div>
      <div className='lg:col-span-3'></div>

      {workExperience.map((exp, idx) => (
        <React.Fragment key={idx}>
          
          <div className='hidden lg:block lg:col-span-2'>
            <p className='font-medium text-cyan-950 text-xl md:text-2xl font-Playfair'>
              {exp.date}
            </p>
          </div>
          <div className='lg:col-span-3 mt-4 lg:mt-0'>
            <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>
              {exp.title}
              {
                exp.info ? <span className='font-medium text-cyan-950 text-xl  font-Playfair my-4'>
                &nbsp;- {exp.info}</span> : ""
              }
            </p>
            <p className='font-medium text-cyan-950 text-xl md:text-2xl font-Playfair my-4'>
              {exp.org} / {exp.location}
              <p className='block lg:hidden font-medium text-cyan-950 text-xl md:text-2xl font-Playfair'>
                {exp.date}
              </p>
            </p>

            {exp.bullets.map((point, i) => (
              <p key={i} className='font-light text-cyan-950 text-lg font-Nunito mb-2'>
                {point}
              </p>
            ))}
          </div>
          {/* <div className='lg:col-span-2'></div> */}
          <div className='lg:hidden border-t-2 border-dotted border-gray-400 w-full '></div>
      
        </React.Fragment>
      ))}

      {/* ######### Education ########### */}
      <div className='hidden lg:block lg:col-span-5 border-t-2 border-dotted border-gray-400 w-full'></div>
      
      <div className='mt-4 lg:mt-0 lg:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left'>
          ― Education
        </p>
      </div>
        <div className='col-span-3 lg:col-span-3'></div>

      {education.map((edu, idx) => (
        <React.Fragment key={idx}>
          <div className='lg:col-span-2'>
            <p className='font-medium text-cyan-950 text-xl font-Playfair mb-4'>{edu.year}</p>
          </div>
          <div className='col-span-3 lg:col-span-3'>
            <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>{edu.school}</p>
            <p className='font-medium text-cyan-950 text-xl font-Playfair mb-4'>{edu.degree}</p>
          </div>
        </React.Fragment>
      ))}

      {/* ######### Certifications ########### */}
      {/* <div className='col-span-3 lg:col-span-3'></div> */}
      <div className='lg:col-span-5 border-t-2 border-dotted border-gray-400 w-full'></div>
      <div className='mt-4 lg:mt-0 lg:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left'>
          ― Certifications
        </p>
      </div>

      <div className='col-span-3 lg:col-span-3'>
        {certifications.map((item, idx) => (
          <p key={idx} className='font-light text-cyan-950 text-lg font-Nunito mb-2'>
            {item}
          </p>
        ))}
      </div>
      <div className='lg:col-span-2'></div>

      {/* ######### Volunteering ########### */}
      <div className='lg:col-span-5 border-t-2 border-dotted border-gray-400 w-full'></div>
      {/* <div className='col-span-3 lg:col-span-3'></div> */}
      <div className='mt-4 lg:mt-0 lg:col-span-2'>
        <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left'>
          ― Volunteering
        </p>
      </div>

      <div className='col-span-3 lg:col-span-3'>
      {volunteering.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className='col-span-3 lg:col-span-3 mb-8'>
            <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>{item.role}</p>
            <p className='font-medium text-cyan-950 text-xl font-Playfair mb-4'>{item.place}</p>
            <p className='font-light text-cyan-950 text-lg font-Nunito'>{item.description}</p>
          </div>
          {/* <div className='lg:col-span-2'></div> */}
        </React.Fragment>
      ))}
      </div>
    </div>
  );
}
