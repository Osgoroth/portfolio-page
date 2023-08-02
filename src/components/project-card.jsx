export default function ProjectCard({ status, name, link, image }) {
  return (
    <a
      href={link}
      className="project project-tile"
      target="_blank"
      rel="noreferrer"
    >
      <img src={image} alt={`${name} image`} className="project-img" />

      <p className="project-title">
        <span className="code">&lt;</span>
        {name}

        <span className="code">/&gt;</span>
      </p>
    </a>
  );
}
