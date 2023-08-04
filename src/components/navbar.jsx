import { BsList } from "react-icons/bs";
import logo from "../dl-logo.svg";
import { useRef, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);
  const togglerRef = useRef(null);

  function navbarToggle() {
    setToggled(!toggled);
    const navList = togglerRef.current;
    navList.classList.toggle("open");
    navList.classList.toggle("toggled");
  }

  function scrollFunction() {
    const scrollValue = document.documentElement.scrollTop;

    if (scrollValue > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", scrollFunction);

  return (
    <nav id="navbar" onScroll={scrollFunction}>
      <div
        id="navbar-scrolled-mask"
        style={{ width: scrolled ? "100%" : toggled && "100%" }}
      ></div>
      <a id="logo-wrapper" href="#hero">
        <picture id="logo">
          <img src={logo} alt="dl logo" />
        </picture>
      </a>
      <BsList className="navbar-toggler" onClick={navbarToggle} />
      <ul
        className="nav-list"
        id="nav-list"
        ref={togglerRef}
        // style={{ transform: toggled ? "translateX(0%)" : "translateX(100%)" }}
      >
        <li>
          <a className="link-item" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="link-item" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="link-item" href="#contacts">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
