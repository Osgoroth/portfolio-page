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
    image: "src/images/foodables.png",
  },
  {
    title: "🪚 Weather App 🪜",
    desc: "A simple weather app to practice and learn new skills.",
    skills: ["React", "TailwindCSS", "Headless UI", "WeatherAPI", "Vite"],
    link: "https://candid-concha-da6de0.netlify.app/",
    image: "src/images/weather-app.png",
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
    image: "src/images/car-stats.png",
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
    image: "src/images/25-5-timer.png",
  },
  {
    title: "CALCULATOR",
    desc: "Simple Javascript calculator",
    skills: ["React", "useState", "Bootstrap", "SASS", "RegEx"],
    link: "https://exquisite-clafoutis-0e3b16.netlify.app/",
    image: "src/images/calculator.png",
  },
  {
    title: "DRUM MACHINE",
    desc: "Simple drum machine styled like Roland TR-909 from 1983.",
    skills: ["React", "useState", "useEffect", "useRef", "HTML Audio"],
    link: "https://resilient-babka-232aa4.netlify.app/",
    image: "src/images/drum-machine.png",
  },
  {
    title: "MARKDOWN PREVIEWER",
    desc: "Lets the user type in markdown code and preview it in the bottom panel.",
    skills: ["React", "Bootstrap", "marked.js", "SASS"],
    link: "https://effortless-centaur-88c960.netlify.app/",
    image: "src/images/markdown-previewer.png",
  },
  {
    title: "RANDOM QUOTE MACHINE",
    desc: "Fetches a random quote from the Quotable API and displays it on the screen, allowing the user to share the quote via a tweet.",
    skills: [
      "React",
      "useState",
      "useEffect",
      "Fetch API",
      "SASS",
      "Quotable API",
    ],
    link: "https://delicate-hamster-ffee96.netlify.app/",
    image: "src/images/random-quote.png",
  },
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
