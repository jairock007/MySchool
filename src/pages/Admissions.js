import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.studentName.trim()) tempErrors.studentName = "Student name is required";
    if (!formData.parentName.trim()) tempErrors.parentName = "Parent name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number is invalid";
    }
    if (!formData.grade) tempErrors.grade = "Grade is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      alert('Application submitted successfully!');
      // Reset form after submission
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        message: ''
      });
    }
  };

  return (
    <div className="admissions">
      <SectionHeader title="Admissions" subtitle="Join our vibrant learning community" />

      <section className="admission-process">
        <h3>Admission Process</h3>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <h4>Important Dates</h4>
        <ul>
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>

      <section className="admission-form">
        <h3>Admission Inquiry Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
            />
            {errors.studentName && <span className="error">{errors.studentName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="parentName">Parent Name</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
            />
            {errors.parentName && <span className="error">{errors.parentName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade Applying For</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
            >
              <option value="">Select Grade</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
              <option value="5">Grade 5</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
            {errors.grade && <span className="error">{errors.grade}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Inquiry</button>
        </form>
      </section>
    </div>
  );
};

export default Admissions;