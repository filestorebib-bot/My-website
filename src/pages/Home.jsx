import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">

          <div className="hero-content">

            <div className="eyebrow">
              AGRICULTURE • EDUCATION • KNOWLEDGE
            </div>

            <h1>
              Learn agriculture.
              <br />
              <span>Share knowledge.</span>
            </h1>

            <p className="hero-description">
              Welcome to the personal academic space of
              <strong> Bibash Lamichhane</strong> — a student
              interested in agriculture, learning, practical
              knowledge and educational resources.
            </p>

            <div className="hero-actions">
              <Link
                to="/notes"
                className="primary-button"
              >
                Explore Notes
                <span>→</span>
              </Link>

              <Link
                to="/about"
                className="secondary-button"
              >
                About Me
              </Link>
            </div>

            <div className="hero-mini-info">
              <div>
                <strong>Student</strong>
                <span>Agriculture & Life Sciences</span>
              </div>

              <div>
                <strong>Nepal</strong>
                <span>Learning & Growing</span>
              </div>
            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-card">

              <div className="hero-card-top">
                <span className="hero-icon">🌱</span>

                <span className="status">
                  Student
                </span>
              </div>

              <div className="plant-illustration">
                <div className="sun"></div>

                <div className="plant">
                  <span className="stem"></span>
                  <span className="leaf leaf-one"></span>
                  <span className="leaf leaf-two"></span>
                  <span className="leaf leaf-three"></span>
                  <span className="leaf leaf-four"></span>
                </div>

                <div className="soil"></div>
              </div>

              <div className="hero-card-bottom">
                <span>Knowledge</span>
                <span>Practice</span>
                <span>Growth</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="intro-section">

        <div className="section-heading">
          <span>MY PLATFORM</span>

          <h2>
            A simple space for learning and sharing.
          </h2>

          <p>
            This website brings together academic notes,
            agricultural resources and information about
            my learning journey.
          </p>
        </div>


        <div className="feature-grid">

          <article className="feature-card">
            <div className="feature-number">01</div>

            <div className="feature-icon">📚</div>

            <h3>Academic Notes</h3>

            <p>
              Organized notes and study materials designed
              to make learning easier and more accessible.
            </p>

            <Link to="/notes">
              Browse notes →
            </Link>
          </article>


          <article className="feature-card">
            <div className="feature-number">02</div>

            <div className="feature-icon">🌾</div>

            <h3>Agriculture</h3>

            <p>
              Explore agriculture-related knowledge,
              concepts, practices and educational resources.
            </p>

            <Link to="/notes">
              Explore resources →
            </Link>
          </article>


          <article className="feature-card">
            <div className="feature-number">03</div>

            <div className="feature-icon">💡</div>

            <h3>Ideas & Learning</h3>

            <p>
              A personal space for sharing ideas, projects,
              experiences and useful learning materials.
            </p>

            <Link to="/about">
              Learn more →
            </Link>
          </article>

        </div>

      </section>


      {/* QUOTE */}
      <section className="quote-section">

        <div className="quote-container">

          <span className="quote-mark">“</span>

          <blockquote>
            Agriculture is not only about growing crops;
            it is about understanding life, nature,
            resources and the people who depend on them.
          </blockquote>

          <p>
            — Bibash Lamichhane
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="home-cta">

        <div>
          <span>START EXPLORING</span>

          <h2>
            Looking for study materials?
          </h2>

          <p>
            Explore the Notes section and discover
            resources organized around Tribhuvan University.
          </p>
        </div>

        <Link
          to="/notes"
          className="primary-button light-button"
        >
          View Notes →
        </Link>

      </section>

    </div>
  );
}
