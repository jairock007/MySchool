import React from 'react';
import SectionHeader from '../components/SectionHeader';

const facultyMembers = [
  {
    name: "John Doe",
    position: "Principal",
    education: "M.Ed",
    experience: "20 years of experience in educational administration",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    education: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    education: "M.A. in English",
    experience: "10 years of teaching experience",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    education: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    education: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    education: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
    image: "https://via.placeholder.com/150"
  }
];

const Faculty = () => {
  return (
    <div className="faculty">
      <SectionHeader title="Our Faculty" subtitle="Meet our dedicated team of educators" />

      <section className="faculty-grid">
        {facultyMembers.map((member, index) => (
          <div key={index} className="faculty-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="education">{member.education}</p>
            <p className="experience">{member.experience}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faculty;