import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects-section";
import Contacts from "./components/sections/contacts-section";
import About from "./components/sections/about-section";

const projects = [
  {
    title: "FOODABLES",
    desc: "Recipe app built with NextJS and ChakraUI",
    skills: [
      "NextJS",
      "React-hook-forms",
      "IndexedDB",
      "Bootstrap",
      "ChakraUI",
    ],
    link: "https://foodables.app/",
    image:
      "https://github.com/Osgoroth/foodables-app/assets/46662617/cbeaacd3-99f5-43f5-8730-8503da30a721",
  },
  {
    title: "🪚 CAR-STATS 🪜",
    desc: "Car ‘showroom’ site for enthusiast.",
    skills: [
      "NextJS",
      "React-hook-forms",
      "SASS",
      "Postgres",
      "ChakraUI",
      "Supabase AUTH",
    ],
    link: "https://car-stats-testing.netlify.app/",
    image:
      "https://github.com/Osgoroth/car-stats/assets/46662617/9ef656e8-f065-4e2a-97ae-292dd4e2d7c9",
  },
  {
    title: "25-5 TIMER",
    desc: "A 'pomodoro' timer to help you work efficiently.",
    skills: [
      "React",
      "useState",
      "useEffect",
      "setInterval",
      "Bootstrap",
      "SASS",
      "HTML Audio",
    ],
    link: "https://benevolent-piroshki-ee3921.netlify.app/",
    image:
      "https://github.com/Osgoroth/25-5-timer/assets/46662617/022fa45e-1618-4d9b-a2d8-97426b22bc4e",
  },
  {
    title: "CALCULATOR",
    desc: "Simple Javascript calculator",
    skills: ["React", "useState", "Bootstrap", "SASS", "RegEx"],
    link: "https://exquisite-clafoutis-0e3b16.netlify.app/",
    image:
      "https://github.com/Osgoroth/calculator/assets/46662617/809e51fa-0ce7-49b5-a99c-fd33a00872b3",
  },
  {
    title: "DRUM MACHINE",
    desc: "Simple drum machine styled like Roland TR-909 from 1983.",
    skills: ["React", "useState", "useEffect", "useRef", "HTML Audio"],
    link: "https://resilient-babka-232aa4.netlify.app/",
    image:
      "https://github.com/Osgoroth/drum-machine/assets/46662617/81c6dc9e-0039-4681-8aff-53bd075150c2",
  },
  {
    title: "MARKDOWN PREVIEWER",
    desc: "Lets the user type in markdown code and preview it in the bottom panel.",
    skills: ["React", "Bootstrap", "marked.js", "SASS"],
    link: "https://effortless-centaur-88c960.netlify.app/",
    image:
      "https://github.com/Osgoroth/markdowner/assets/46662617/027b3a27-d7a7-4122-9b8c-c41f4c457257",
  },
  {
    title: "RANDOM QUOTE MACHINE",
    desc: "Fetches a random quote from the Quotable API and displays it on the screen, allowing the user to share the quote via a tweet.",
    skills: ["React", "useState", "useEffect", "SASS", "Quotable API"],
    link: "https://delicate-hamster-ffee96.netlify.app/",
    image:
      "https://github.com/Osgoroth/random-quote-machine/assets/46662617/6006ffaa-aae9-49c4-a73a-b0868762a528",
  },
  // {
  //   title: "Personal Portfolio",
  //   link: "https://github.com/Osgoroth/portfolio-page",
  //   image:
  //     "https://github.com/Osgoroth/portfolio-page/assets/46662617/edae18c1-fb5a-4908-8ffa-29f874aaa67e",
  // },
  // {
  //   title: "Tribute page",
  //   link: "https://github.com/Osgoroth/tribute-page",
  //   image:
  //     "https://user-images.githubusercontent.com/46662617/238393993-1d07fd1b-1b54-4814-bb28-82e6b41bcb4c.jpeg",
  // },
  // {
  //   title: "Technical documentation page",
  //   link: "https://github.com/Osgoroth/technical-documentation-page",
  //   image:
  //     "https://user-images.githubusercontent.com/46662617/233059941-d1bd9050-42d9-4287-8427-c89f06384827.jpg",
  // },
  // {
  //   title: "Product landing page",
  //   link: "https://github.com/Osgoroth/product-landing-page",
  //   image:
  //     "https://user-images.githubusercontent.com/46662617/233065291-3798a3a1-441b-40ea-95f4-b887e73a235b.jpg",
  // },
];

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Contacts />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
