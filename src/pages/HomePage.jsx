import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faHandsPraying,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faNode,
  faNpm,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

import { FaAngular } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Featured from "../component/Featured";
// import typescript from "/images/typescript.svg";
import img from "../../public/images/dash.png";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiRedux,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const HomePage = () => {
  return (
    <>
      <main>
        {/* Intro */}

        <div className="intro-container">
          <div className="intro-details">
            <h2 className="namaste">
              Namaste{" "}
              <FontAwesomeIcon
                icon={faHandsPraying}
                style={{ color: "#ffffff" }}
              />
            </h2>
            <div className="intro-detail-container">
              <h1>I am Rajdeep Dutta,</h1>
              <p>
                a <span className="underline">web</span> developer
                {/* </span> */} based in Assam, India.
              </p>
              {/* <br /> */}
              <div className="rotating-text">
                <p>I love building </p>
                <div className="words">
                  <span className="w-1">beautiful</span>

                  <span className="w-2">functional</span>
                  <span className="w-3">interactive</span>
                </div>
              </div>
              <p>web applications.</p>
            </div>
            <p className="email-ping">
              Ping me{" "}
              <FontAwesomeIcon className="point" icon={faHandPointRight} />{" "}
              <span>
                <a target="blank" href="mailto:rajdeepdutta70@gmail.com">
                  rajdeepdutta70@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* background */}

        <div className="background-container">
          <h3 className="bg-title">Background</h3>
          <div className="background-detail-container">
            <p className="bg-details-edu">
              I graduated from{" "}
              <span className="underline-bold">Tezpur University, Assam</span>{" "}
              after completing Bachelor of Engineering in Food Engineering &
              Technology.
            </p>
            <p className="bg-details">
              My love and curiosity for computers from early childhood dragged
              me into this sea of awesomeness. And with an engineering mindset,
              I have immersed myself into it to create endless possibilities and
              opportunities, with an aim to develop clean and wonderful
              products, providing an engaging user experience.
            </p>
            <p className="bg-details hobby">
              But whenever <span>I am not in front of my pc screen</span>, I am
              probably <span>cooking, reading books, or cycling</span>.
            </p>
            <a
              href="https://drive.google.com/file/d/1eHMNmYYOGwIMPkjtrd_4INVqL6i5NKbz/view?usp=sharing"
              className="resume-link"
              target="blank">
              Check out my CV
            </a>
          </div>
        </div>

        {/* featured */}

        <Featured />

        {/* skill */}

        <div className="skill-container">
          <h3 className="skill-title">Skills</h3>
          <div className="skill-icon-container">
            <div className="icon-container">
              <SiHtml5 />
              <p>HTML</p>
            </div>

            <div className="icon-container">
              <SiCss3 />
              <p>CSS</p>
            </div>
            <div className="icon-container">
              <SiJavascript />
              <p>Javascript</p>
            </div>
            <div className="icon-container">
              <SiReact />
              <p>React</p>
            </div>
            <div className="icon-container">
              {/* <SiRedux className="redux" /> */}
              <FaAngular />
              <p>Angular</p>
            </div>
            <div className="icon-container">
              <SiNodedotjs />
              <p>NodeJs</p>
            </div>
            <div className="icon-container">
              {/* <FontAwesomeIcon className="skill-icon" icon={fa} /> */}
              <BiLogoTypescript />
              <p>TypeScript</p>
            </div>
            <div className="icon-container">
              <SiNpm />
              <p>npm</p>
            </div>
            <div className="icon-container">
              <SiGit />
              <p>Git</p>
            </div>
            <div className="icon-container">
              <SiMongodb />
              <p>MongoDB</p>
            </div>
          </div>
        </div>

        {/* project */}

        <div className="project-container">
          <h3 className="project-title">Projects</h3>
          <div className="project-detail-container">
            <div className="project-detail">
              <div className="project-info">
                <h4>
                  Outdoors <span className="project-info__date">2024</span>
                </h4>
                <div className="tool-req">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>Sementic UI</p>
                  <p>SASS</p>
                </div>
                <p>
                  Outdoors is a trekking booking web app where users can browse
                  and opt their next trekking amidst the nature. This is a
                  frontend only web app created using React and SASS, is a
                  outline of my journey so far.
                </p>
                <a href="https://outdoors-ll.netlify.app/" target="blank">
                  View Project
                </a>
                <a
                  href="https://github.com/rajdeepX/outdoors_II"
                  target="blank">
                  View Project Code
                </a>
              </div>

              <div className="project-img-container">
                <a href="https://outdoors-ll.netlify.app/" target="blank">
                  <img src="/images/outdoor.png" alt="ss" />
                </a>
              </div>
            </div>
            <div className="project-detail">
              <div className="project-info">
                <h4>
                  BlogSite <span className="project-info__date">2023</span>
                </h4>
                <div className="tool-req">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>React Router</p>
                  <p>Sementic UI</p>
                  <p>Express</p>
                  <p>NodeJs</p>
                  <p>MongoDB</p>
                </div>
                <p>
                  A fullstack MERN-powered blog platform, blogSite! Immerse
                  yourself in a world of captivating content. Discover, read,
                  and engage with a vibrant community of writers. Create an
                  account, share your thoughts, and edit your blogs
                  effortlessly. Unleash your creativity and be part of a
                  thriving online ecosystem.
                </p>
                <a
                  href="https://blogsite-mern-blog.onrender.com/"
                  target="blank">
                  View Project
                </a>
                <a
                  href="https://github.com/rajdeepX/mern-blogSite"
                  target="blank">
                  View Project Code
                </a>
              </div>

              <div className="project-img-container">
                <a
                  href="https://blogsite-mern-blog.onrender.com/"
                  target="blank">
                  <img src="/images/blogSS.jpg" alt="ss" />
                </a>
              </div>
            </div>

            <div className="project-detail">
              <div className="project-info">
                <h4>
                  NoteDeckV2 <span className="project-info__date">2023</span>
                </h4>
                <div className="tool-req">
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>MongoDB</p>
                  <p>React Router</p>
                  <p>NodeJs</p>
                  <p>ExpressJs</p>
                  <p>Sementic UI</p>
                </div>
                <p>
                  A fullstack dynamic note-taking app powered by the MERN stack
                  and enriched with TypeScript. Seamlessly organize your
                  thoughts within individual notes, which can be structured into
                  decks for optimal clarity. Elevate your note-taking experience
                  with NoteDeck's intuitive and versatile platform.
                </p>
                <a href="https://notedeckv2.onrender.com/" target="blank">
                  View Project
                </a>
                <a href="https://github.com/rajdeepX/NoteDeckV2" target="blank">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <a href="https://notedeckv2.onrender.com/" target="blank">
                  <img src="/images/NoteDeck.jpg" alt="ss" />
                </a>
              </div>
            </div>

            <div className="project-detail">
              <div className="project-info">
                <h4>
                  BookInn <span className="project-info__date">2023</span>
                </h4>
                <div className="tool-req">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>React Router</p>
                  <p>Sementic UI</p>
                  <p>React Icons</p>
                </div>
                <p>
                  Welcome to bookInn, your homestay booking app! Discover unique
                  accommodations, book your ideal stay, and immerse yourself in
                  unforgettable experiences. Browse through a wide selection of
                  homes, villas, and apartments, and make your travel dreams a
                  reality.
                </p>
                <a
                  href="https://react-bookinn-application.netlify.app/"
                  target="blank">
                  View Project
                </a>
                <a
                  href="https://github.com/rajdeepX/bookInn-project"
                  target="blank">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <a
                  target="blank"
                  href="https://react-bookinn-application.netlify.app/">
                  <img src="/images/bookInn.png" alt="ss" />
                </a>
              </div>
            </div>
            <div className="project-detail">
              <div className="project-info">
                <h4>
                  CrypTrack <span className="project-info__date">2023</span>
                </h4>
                <div className="tool-req">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>React Router</p>
                  <p>Sementic UI</p>
                  <p>Rapid Api</p>
                  <p>Chart.js</p>
                </div>
                <p>
                  Welcome to my React-based cryptocurrency tracker CrypTrack!
                  Here you can find data on various cryptocurrencies. Powered by
                  Rapid API, this dynamic website provides essential
                  information, including prices and historical chart. Explore
                  the exciting world of digital currencies and make informed
                  investment decisions.
                </p>
                <a
                  href="https://cryptrack-react-project.netlify.app/"
                  target="blank">
                  View Project
                </a>
                <a href="https://github.com/rajdeepX/CrypTrack">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <a
                  href="https://cryptrack-react-project.netlify.app/"
                  target="blank">
                  <img src="/images/cryptrack.jpg" alt="ss" />
                </a>
              </div>
            </div>
            <div className="project-detail">
              <div className="project-info">
                <h4>
                  Covid Dashboard{" "}
                  <span className="project-info__date">2023</span>
                </h4>
                <div className="tool-req">
                  <p>TypeScript</p>
                  <p>React</p>
                  <p>Redux</p>
                  <p>React Router</p>
                  <p>React Query</p>
                  <p>Tailwind</p>
                  <p>Leaflet</p>
                  <p>Chart.js</p>
                  <p>Recharts</p>
                </div>
                <p>
                  This a React-based contacts and covid19 dashboard app. Here
                  you can store your contacts, edit and delete them. Also in the
                  covid19 section, you can see the various data related to the
                  cases of covid19 countrywise and worldwide, providing
                  essential information, including location in a world map and
                  historical chart of the cases worldwide.
                </p>
                <a
                  href="https://contact-management-covid-dashboard.netlify.app/"
                  target="blank">
                  View Project
                </a>
                <a href="https://github.com/rajdeepX/Dashboard">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <a
                  href="https://contact-management-covid-dashboard.netlify.app/"
                  target="blank">
                  <img src={img} alt="ss" />
                </a>
              </div>
            </div>

            <a
              href="https://github.com/rajdeepX?tab=repositories"
              className="other-project">
              Check my other projects on github.
            </a>
          </div>
        </div>
        <div className="commit">
          <p>
            With my experiences and all my knowledge that I have gathered during
            this magnificient journey, I am prepared to tackle the challenges
            that may arise with the goal to achieve positive outcomes, and will
            always find a way to bring your products to life.
          </p>
          <p>
            And the thing that bring me back to life is eating spicy chicken
            dishes, a field that I am undisputed at. Hot and spicy chicken is
            what I live for.
          </p>
        </div>
        <div className="contact-container">
          <p className="contact">Get In Touch</p>
          <p>If you love hot and spicy chicken as much as I do.</p>
          <p>
            Love hot and spicy chicken dishes as much as I do? Let&#39;s talk
            about how awesome they are! We can code while we eat our spiced up
            chicken!
          </p>
          <a
            href="mailto:rajdeepdutta70@gmail.com"
            className="contact-btn"
            target="blank">
            Contact Me
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
