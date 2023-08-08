import ProjectArticle from "../project-article";
import PropTypes from "prop-types";

export default function Projects({ projects }) {
  return (
    <div id="projects" className="projects-wrapper">
      <div className="container-lg header-container">
        <h2 className="projects-header">CURRENT PROJECTS</h2>
      </div>
      {projects.map((project) => ProjectArticle(project))}
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};
