import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact">
      <SectionHeader title="Contact Us" subtitle="Get in touch with Springdale Public School" />

      <div className="contact-content">
        <div className="contact-info">
          <h3>School Information</h3>
          <p>Address: 123 Education Lane, Cityville, State, ZIP Code</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@springdale.edu</p>

          <h3>Office Hours</h3>
          <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
          <p>Saturday: 9:00 AM - 12:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="contact-form">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
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
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map">
        <h3>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2164517670465!2d-73.98784668459469!3d40.74844097932851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1612345678901!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="School Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;