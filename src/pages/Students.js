import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Students = () => {
  return (
    <div className="students">
      <SectionHeader title="Student Life" subtitle="Nurturing well-rounded individuals" />

      <section className="extracurricular">
        <h3>Extracurricular Activities</h3>
        <ul>
          <li>Music</li>
          <li>Dance</li>
          <li>Drama</li>
          <li>Art</li>
          <li>Sports</li>
          <li>Robotics</li>
          <li>Debate Club</li>
          <li>Science Club</li>
        </ul>
      </section>

      <section className="clubs-societies">
        <h3>Clubs and Societies</h3>
        <ul>
          <li>Literary Society</li>
          <li>Environmental Club</li>
          <li>Astronomy Club</li>
          <li>Coding Club</li>
        </ul>
      </section>

      <section className="student-achievements">
        <h3>Student Achievements</h3>
        <ul>
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>

      <section className="student-council">
        <h3>Student Council</h3>
        <ul>
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>
    </div>
  );
};

export default Students;