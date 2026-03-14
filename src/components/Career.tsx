import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>EchoMind</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a full-stack AI platform supporting essay analysis, resume review, and code feedback using Groq LLMs.
              Implemented secure authentication with email verification, OTP-based signup, and auto-login using NextAuth
              (JWT strategy).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>K-Hive</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a scalable campus community platform with 500+ registered
              users to facilitate student interactions, announcements, and
              discussions across multiple societies
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Sklad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and implemented a backend system for managing warehouse inventory, 
              enabling CRUD operations and efficient data handling through REST APIs. 
              Focused on scalable architecture, database integration, and structured API design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
