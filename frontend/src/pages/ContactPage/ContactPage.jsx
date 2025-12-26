import React, { forwardRef } from 'react';
import { useState } from "react";
import { supabaseUrl, supabaseAnonKey} from "../../constants";
import { createClient } from "@supabase/supabase-js";
import './ContactPage.css';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const ContactPage = forwardRef(({ dataColor }, ref) => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting form:", formData);

    try {
      // Insert into Supabase
      console.log("Inserting into Supabase...");
      const { error } = await supabase.from("appointments").insert([formData], { returning: "minimal" });
      

      if (error) {
        console.error("Supabase Insert Error:", error);
        alert("Error storing data in Supabase.");
        return;
      }
      console.log("Data inserted successfully!");
      

        if (1) {
          alert("Appointment booked successfully!");
          setFormData({ name: "", email: "", message: "", date: "" });
        } else {
          alert("Failed to save data to Google Sheets.");
        }
      }
     finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="contact-section" data-aos="zoom-in-up">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtext">We’re here to help — reach out for support, partnerships, or questions.</p>

      <div className="contact-grid">
        {/* Contact Details Card */}
        

        {/* Contact Form */}
            <div className="contact-container" id="contact">
      
      <div className="form-container" id="contactpage">
        <p className="contact-subheading">Schedule a call with us.</p>
        <form onSubmit={handleSubmit} className="contact-form"  >
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
            className="input-field" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            className="input-field" 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            required 
            value={formData.message} 
            onChange={handleChange} 
            className="input-field textarea-field"
          ></textarea>
          <input 
            type="date" 
            name="date" 
            required 
            value={formData.date} 
            onChange={handleChange} 
            className="input-field date-field" 
          />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>

        {/* Map */}
        <div className="contact-map zoom-in-map">
          <iframe
            title="Office Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4867.0!2d75.1440!3d15.3560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73c91911545%3A0x900be58f1c9e4002!2sNEO%20books%20and%20coffee%2C%20Deshpande%20Nagar%2C%20Hubballi!5e0!3m2!1sen!2sin!4v1752000000000!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

       
        </div>
      </div>
    </section>
  );
});
ContactPage.displayName = "contact";    

export default ContactPage;
