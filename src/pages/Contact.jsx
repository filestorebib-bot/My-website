import '../styles/contact.css';

export default function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">

        <div className="contact-hero-container">

          <span>
            GET IN TOUCH
          </span>

          <h1>
            Let's connect.
          </h1>

          <p>
            Have a question, suggestion, academic resource
            or idea to share? Feel free to reach out.
          </p>

        </div>

      </section>


      <section className="contact-content">

        <div className="contact-grid">

          <div className="contact-info">

            <span className="contact-small">
              CONTACT
            </span>

            <h2>
              Have something to say?
            </h2>

            <p>
              Whether you want to discuss agriculture,
              academic resources, notes or a possible
              collaboration, you can get in touch.
            </p>


            <div className="contact-item">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <small>Email</small>

                <a href="mailto:bibashlamichhanenp@gmail.com">
                  bibashlamichhanenp@gmail.com
                </a>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <small>Location</small>

                <strong>
                  Nepal
                </strong>
              </div>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();

              const name =
                e.target.name.value;

              const email =
                e.target.email.value;

              const message =
                e.target.message.value;

              const subject =
                encodeURIComponent(
                  `Website message from ${name}`
                );

              const body =
                encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`
                );

              window.location.href =
                `mailto:bibashlamichhanenp@gmail.com?subject=${subject}&body=${body}`;
            }}
          >

            <div className="form-row">

              <label>
                Name

                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email

                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

            </div>


            <label>
              Message

              <textarea
                name="message"
                rows="7"
                placeholder="Write your message..."
                required
              ></textarea>
            </label>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Message →
            </button>

            <p className="form-note">
              Your email application will open when
              you click Send Message.
            </p>

          </form>

        </div>

      </section>

    </div>
  );
}
