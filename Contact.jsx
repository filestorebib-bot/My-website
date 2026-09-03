import { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Message submitted.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name"
            type="text" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            value={form.email} 
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            rows="5" 
            value={form.message} 
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
            required 
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}