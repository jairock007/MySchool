import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faBook, faChalkboardTeacher, faUserGraduate, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/QuickLinks.css';

const QuickLinks = () => {
  return (
    <section className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li className="quick-link-item">
          <Link to="/admissions">
            <FontAwesomeIcon icon={faDoorOpen} /> Admissions
          </Link>
        </li>
        <li className="quick-link-item">
          <Link to="/academics">
            <FontAwesomeIcon icon={faBook} /> Academics
          </Link>
        </li>
        <li className="quick-link-item">
          <Link to="/faculty">
            <FontAwesomeIcon icon={faChalkboardTeacher} /> Faculty
          </Link>
        </li>
        <li className="quick-link-item">
          <Link to="/students">
            <FontAwesomeIcon icon={faUserGraduate} /> Student Life
          </Link>
        </li>
        <li className="quick-link-item">
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact Us
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default QuickLinks;
