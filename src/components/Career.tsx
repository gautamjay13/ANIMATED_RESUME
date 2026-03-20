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
                <h4>Web Development Intern</h4>
                <h5>Internshala</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and deployed responsive websites using HTML, CSS, and JavaScript. Improved website performance and mobile compatibility while enhancing UI and usability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HR Video Editor</h4>
                <h5>Visoka Foundation</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Edited HR event and employee engagement videos. Collaborated with HR and media teams to ensure quality content delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
