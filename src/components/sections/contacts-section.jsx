import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsTelephoneFill,
  BsEnvelopeAtFill,
} from "react-icons/bs";

export default function Contacts() {
  return (
    <div className="contacts__wrapper" id="contacts">
      <section className="container-sm contacts">
        <h2 className="contact__header">I can&apos;t wait to hear from you!</h2>
        <div className="contact__container">
          <a
            href="https://github.com/Osgoroth"
            className="profile__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.facebook.com/david.lucas.3114935/"
            className="profile__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/david-lucas-0536b6108/"
            className="profile__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="mailto:david-charles-lucas@outlook.com"
            className="profile__link"
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
