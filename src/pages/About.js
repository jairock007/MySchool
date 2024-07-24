import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const { schoolInfo } = useSelector((state) => state.school);

  return (
    <div className="about">
      <SectionHeader title="About Us" subtitle="Learn more about Springdale Public School" />

      <section className="history">
        <h3>Our History</h3>
        <p>Founded in {schoolInfo.foundedYear}, Springdale Public School has been dedicated to providing quality education and holistic development to students for over {new Date().getFullYear() - schoolInfo.foundedYear} years.</p>
      </section>

      <section className="vision-mission">
        <h3>Vision</h3>
        <p>{schoolInfo.vision}</p>
        <h3>Mission</h3>
        <p>{schoolInfo.mission}</p>
      </section>

      <section className="principal-message">
        <h3>Principal's Message</h3>
        <blockquote>
          "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our commitment to excellence in education is unwavering, and we strive to create an environment where students can grow academically, socially, and emotionally."
        </blockquote>
        <p>- John Doe, Principal</p>
      </section>

      <section className="facilities">
        <h3>Our Facilities</h3>
        <ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
  );
};

export default About;