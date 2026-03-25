
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Fraud Watch Dashboard",
    category: "Full-Stack Application",
    tools: "React, TypeScript, Node.js, Express",
    image: "/images/Money-Mulling.png",
  },
  {
    title: "Managevee",
    category: "Web Application",
    tools: "Public APIs, Real-time Data",
    image: "/images/Managevee.png",
  },
  {
    title: "Calculator Web App",
    category: "Interactive Utility",
    tools: "JavaScript, HTML, CSS",
    image: "/images/Solidx.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      {/* Background Particles */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="work-container section-container">
        <h2 className="section-title">
          My <span>Work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Giant low-opacity background number */}
              <div className="project-bg-number">
                0{index + 1}
              </div>
              
              <div className="project-content">
                <div className="project-info">
                  <div className="project-header">
                    <span className="project-index">0{index + 1} //</span>
                    <p className="project-category">{project.category}</p>
                  </div>
                  
                  <h4>{project.title}</h4>
                  
                  <div className="project-tools">
                    <span className="tools-label">Tools & Features</span>
                    <p>{project.tools}</p>
                  </div>
                </div>

                <div className="project-image-wrapper">
                  <WorkImage image={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
