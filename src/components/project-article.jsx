export default function ProjectArticle({ title, desc, skills, link, image }) {
  return (
    <article className="container-flex py-5" key={title}>
      <div className="container-lg project-container d-flex flex-md-row flex-column">
        <div className="left">
          <div className="project-title">
            <h2>{title}</h2>
          </div>
          <div className="project-desc">
            <p>{desc}</p>
          </div>
          <div className="project-skills">
            Skills used:
            <ul>
              {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div className="cta">
            <a
              type="button"
              className="btn btn-outline-light cta-button"
              href={link}
            >
              VIEW PROJECT
            </a>
          </div>
        </div>
        <div className="right">
          <div>
            <picture>
              <img
                src={image}
                alt={`${title} image`}
                className="project-image"
              />
            </picture>
          </div>
        </div>
      </div>
    </article>
  );
}
