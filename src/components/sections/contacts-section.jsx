import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsTelephoneFill,
  BsEnvelopeAtFill,
} from "react-icons/bs";

export default function Contacts() {
  return (
    <div id="contacts-wrapper">
      <section id="contacts" className="container-sm">
        <h2 className="contact-header">I can&apos;t wait to hear from you!</h2>
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
            href="tel:+447460485234"
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
    </div>
  );
}
