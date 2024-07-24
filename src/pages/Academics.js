import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Academics = () => {
  return (
    <div className="academics">
      <SectionHeader title="Academics" subtitle="Nurturing minds, shaping futures" />

      <section className="curriculum">
        <h3>Our Curriculum</h3>
        <div className="curriculum-level">
          <h4>Primary (Grades 1-5)</h4>
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Art</li>
            <li>Physical Education</li>
          </ul>
        </div>
        <div className="curriculum-level">
          <h4>Secondary (Grades 6-10)</h4>
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science (Physics, Chemistry, Biology)</li>
            <li>Social Studies</li>
            <li>Computer Science</li>
            <li>Physical Education</li>
            <li>Art</li>
          </ul>
        </div>
        <div className="curriculum-level">
          <h4>Senior Secondary (Grades 11-12)</h4>
          <h5>Science Stream</h5>
          <ul>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Mathematics</li>
            <li>Computer Science</li>
            <li>English</li>
          </ul>
          <h5>Commerce Stream</h5>
          <ul>
            <li>Accountancy</li>
            <li>Business Studies</li>
            <li>Economics</li>
            <li>Mathematics</li>
            <li>English</li>
          </ul>
        </div>
      </section>

      <section className="teaching-methods">
        <h3>Teaching Methodologies</h3>
        <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our approach includes:</p>
        <ul>
          <li>Interactive classroom discussions</li>
          <li>Hands-on experiments and projects</li>
          <li>Group activities and collaborative learning</li>
          <li>Technology-integrated lessons</li>
          <li>Personalized learning plans</li>
        </ul>
      </section>

      <section className="resources">
        <h3>Educational Resources</h3>
        <p>Our students have access to a wide range of educational resources, including:</p>
        <ul>
          <li>Digital classrooms equipped with smart boards</li>
          <li>Interactive learning modules and software</li>
          <li>Online educational platforms for supplementary learning</li>
          <li>Well-stocked library with both physical and digital resources</li>
          <li>Modern science and computer labs</li>
        </ul>
      </section>
    </div>
  );
};

export default Academics;