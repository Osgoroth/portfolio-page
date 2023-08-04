import ProjectArticle from "../project-article";

export default function Projects({ projects }) {
  return (
    <div id="projects" className="projects-wrapper">
      <div className="container-sm">
        <h2 className="projects-header">CURRENT PROJECTS</h2>
      </div>
      {projects.map((project) => ProjectArticle(project))}
    </div>
  );
}
