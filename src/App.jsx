import React from 'react';
import './App.css';

const resume = {
  name: "LAKSHITHA R",
  role: "Software Developer",
  aboutMe: "Motivated B.Tech Information Technology student with a strong CGPA of 8.76, passionate about leveraging software technologies to solve complex problems. Possesses hands-on internship experience in Web Development and Software Testing. Certified in AWS and Java, with foundational expertise in full-stack development using Spring Boot and ReactJS. Eager to launch a career as a technology professional to deliver high-quality software solutions.",
  contact: {
    email: "lakshitha.r0905@gmail.com",
    github: "https://github.com/Lakshitharamesh/HR",
    linkedin: "https://www.linkedin.com/in/lakshitha-rameshkumar/"
  },
  languages: ["JAVA", "SQL", "HTML", "CSS", "JavaScript"],
  frameworks: ["SpringBoot", "ReactJS", "JDBC"],
  tools: ["Visual Studio Code", "Eclipse"],
  projects: [
    {
      title: "Database Storage System",
      tech: "SpringBoot & JDBC",
      desc: "Collects user input through a form and stores it in the database."
    },
    {
      title: "Yomato Clone",
      tech: "HTML, CSS, JS",
      desc: "Food delivering website front end built with modern responsive design."
    }
  ],
  internshipExperience: [
    { 
      company: "Virtual Tech Services", 
      role: "Web Developer", 
      desc: "Worked with front-end and back-end technologies to implement user input handling and database integration." 
    },
    { 
      company: "Neocognix", 
      role: "Software Testing", 
      desc: "Performed functional and regression testing to identify defects and ensure software quality." 
    }
  ],
  certs: [
    { title: "AWS Practitioner", issuer: "Amazon", desc: "Foundational knowledge of AWS cloud concepts, core services, and security." },
    { title: "Programming in Java", issuer: "NPTEL", desc: "Mastered Java fundamentals and Object-Oriented Programming concepts." }
  ]
};

function App() {
  return (
    <div className="app-wrapper">
      <div className="neon-bg"></div>
      
      <nav className="navbar">
        <div className="logo">{resume.name}</div>
        <div className="nav-links">
          <a href="#about">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Portfolio</a>
          <button className="contact-btn" onClick={() => window.location.href = `mailto:${resume.contact.email}`}>
            Contact Me
          </button>
        </div>
      </nav>

      <header id="about" className="hero-split">
        <div className="hero-left">
          <div className="photo-container">
             <div className="photo-placeholder">
                {/* Updated photo name */}
                <img src="/profilefinal.jpeg" alt={resume.name} className="main-photo" />
             </div>
          </div>
        </div>
        
        <div className="hero-right">
          <h1 className="role-title">{resume.name}</h1>
          <h2 className="name-subtitle">{resume.role}</h2>
          <p className="hero-description">{resume.aboutMe}</p>
          <div className="hero-btns">
            {/* Updated PDF link */}
            <a 
              href="/resume2pdf.pdf" 
              download="resume2pdf.pdf" 
              className="download-btn"
              style={{ textDecoration: 'none' }}
            >
              Download Resume
            </a>
            <a href={resume.contact.linkedin} target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
            <span className="separator">|</span>
            <a href={resume.contact.github} target="_blank" rel="noreferrer" className="social-link">GitHub</a>
          </div>
        </div>
      </header>

      <section id="skills" className="section">
        <h3 className="section-title">Technical Expertise</h3>
        <div className="grid">
          <div className="neon-card">
            <p className="tech-label">Languages</p>
            <p>{resume.languages.join(" • ")}</p>
          </div>
          <div className="neon-card">
            <p className="tech-label">Frameworks</p>
            <p>{resume.frameworks.join(" • ")}</p>
          </div>
          <div className="neon-card">
            <p className="tech-label">Tools</p>
            <p>{resume.tools.join(" • ")}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h3 className="section-title">Featured Projects</h3>
        <div className="grid">
          {resume.projects.map((proj, i) => (
            <div key={i} className="neon-card project-card">
              <h4>{proj.title}</h4>
              <p className="tech-label">{proj.tech}</p>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="internships" className="section">
        <h3 className="section-title">Internship Experience</h3>
        <div className="grid">
          {resume.internshipExperience.map((job, i) => (
            <div key={i} className="neon-card internship-card">
              <h4>{job.role}</h4>
              <p className="tech-label purple-label">{job.company}</p>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="certs" className="section">
        <h3 className="section-title">Certifications</h3>
        <div className="grid">
          {resume.certs.map((cert, i) => (
            <div key={i} className="neon-card border-purple">
              <h4>{cert.title}</h4>
              <p className="tech-label">{cert.issuer}</p>
              <p>{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-socials">
          <a href={resume.contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p>© 2026 {resume.name} | Future Tech Leader</p>
      </footer>
    </div>
  );
}

export default App;