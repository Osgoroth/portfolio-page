export default function ProjectCard({ title, link, image }) {
  return (
    <a
      href={link}
      className="project project-tile"
      target="_blank"
      rel="noreferrer"
      key={title}
    >
      <picture>
        <img src={image} alt={`${title} image`} className="project-img" />
      </picture>

      <p className="project-title">
        <span className="code">&lt;</span>
        {title}

        <span className="code">/&gt;</span>
      </p>
    </a>
  );
}
