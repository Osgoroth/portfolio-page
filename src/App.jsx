import "./App.scss";
import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsTelephoneFill,
  BsEnvelopeAtFill,
} from "react-icons/bs";
import ProjectCard from "./components/project-card";
const projects = [
  {
    name: "'Foodables' - Recipe App",
    link: "https://foodables.app/",
    image:
      "https://github.com/Osgoroth/foodables-app/assets/46662617/95bdcca9-fec3-4f5d-8e6b-6520436256fb",
  },
  {
    status: "new",
    name: "25-5 Timer",
    link: "https://benevolent-piroshki-ee3921.netlify.app/",
    image:
      "https://github.com/Osgoroth/25-5-timer/assets/46662617/e13cda85-93cf-423c-8289-2782ed4026b0",
  },
  {
    status: "new",
    name: "Calculator",
    link: "https://exquisite-clafoutis-0e3b16.netlify.app/",
    image:
      "https://github.com/Osgoroth/calculator/assets/46662617/1d0fadbc-371b-4c59-9488-d3d23ca609f1",
  },
  {
    status: "new",
    name: "Drum Machine",
    link: "https://resilient-babka-232aa4.netlify.app/",
    image:
      "https://github.com/Osgoroth/drum-machine/assets/46662617/feefead7-9292-4121-8a34-f909668ae97d",
  },
  {
    status: "new",
    name: "Markdown Previewer",
    link: "https://effortless-centaur-88c960.netlify.app/",
    image:
      "https://github.com/Osgoroth/markdowner/assets/46662617/960443ed-840b-4f00-8f36-fc2f89d76d4d",
  },
  {
    status: "new",
    name: "Random Quote Machine",
    link: "https://delicate-hamster-ffee96.netlify.app/",
    image:
      "https://user-images.githubusercontent.com/46662617/257800790-85d65832-b828-4e65-9083-3aa493119978.png",
  },
  {
    name: "Personal Portfolio",
    link: "https://github.com/Osgoroth/portfolio-page",
    image:
      "https://github.com/Osgoroth/portfolio-page/assets/46662617/edae18c1-fb5a-4908-8ffa-29f874aaa67e",
  },
  {
    name: "Tribute page",
    link: "https://github.com/Osgoroth/tribute-page",
    image:
      "https://user-images.githubusercontent.com/46662617/238393993-1d07fd1b-1b54-4814-bb28-82e6b41bcb4c.jpeg",
  },
  {
    name: "Technical documentation page",
    link: "https://github.com/Osgoroth/technical-documentation-page",
    image:
      "https://user-images.githubusercontent.com/46662617/233059941-d1bd9050-42d9-4287-8427-c89f06384827.jpg",
  },
  {
    name: "Product landing page",
    link: "https://github.com/Osgoroth/product-landing-page",
    image:
      "https://user-images.githubusercontent.com/46662617/233065291-3798a3a1-441b-40ea-95f4-b887e73a235b.jpg",
  },
];

function App() {
  return (
    <>
      <header>
        <nav id="navbar">
          <ul className="nav-list">
            <li>
              <a className="link-item" href="#welcome-section">
                About
              </a>
            </li>
            <li>
              <a className="link-item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="link-item" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="welcome-section">
          <h1>Hi, I&apos;m David</h1>
          <p>a budding web developer</p>
        </section>
        <section id="projects">
          <h2 className="projects-header">
            Here&apos;s what I&apos;ve been working on
          </h2>
          <div className="projects-grid">
            {projects.map(({ status, name, link, image }) =>
              ProjectCard({ status, name, link, image })
            )}
          </div>
        </section>
        <section id="contact">
          <h2 className="contact-header">
            I can&apos;t wait to hear from you!
          </h2>
          <div className="contact-container">
            <a
              href="https://github.com/Osgoroth"
              id="profile-link"
              className="profile-link"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.facebook.com/david.lucas.3114935/"
              className="profile-link"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/david-lucas-0536b6108/"
              className="profile-link"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="tel:+8615110141552"
              className="profile-link"
              target="_blank"
              rel="noreferrer"
            >
              <BsTelephoneFill />
            </a>
            <a
              href="mailto:david-lucas-social@outlook.com"
              className="profile-link"
              target="_blank"
              rel="noreferrer"
            >
              <BsEnvelopeAtFill />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>This is a real portfolio that I will use to land my next job!</p>
      </footer>
    </>
  );
}

export default App;
