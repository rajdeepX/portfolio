import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faHandsPraying,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faNode,
  faNpm,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Featured from "../component/Featured";

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
              href="https://drive.google.com/file/d/1GoTehqDfpQFvXWCL38Vgg1wPJ2EpbR5t/view?usp=sharing"
              className="resume-link"
              target="blank"
            >
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
              <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
              <p>HTML</p>
            </div>

            <div className="icon-container">
              <FontAwesomeIcon className="skill-icon" icon={faCss3Alt} />
              <p>CSS</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="skill-icon" icon={faSquareJs} />
              <p>Javascript</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="skill-icon" icon={faReact} />
              <p>React</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="skill-icon" icon={faNode} />
              <p>NodeJs</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="skill-icon" icon={faNpm} />
              <p>npm</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="skill-icon" icon={faGitAlt} />
              <p>Git</p>
            </div>
            {/* <div className="icon-container">
              <FontAwesomeIcon className="skill-icon" icon={faGithub} />
              <p>Github</p>
            </div> */}
            <div className="icon-container">
              <svg
                className="mongo"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z" />
              </svg>
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
                <h4>BlogSite</h4>
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
                  Introducing my MERN-powered blog platform, blogSite! Immerse
                  yourself in a world of captivating content. Discover, read,
                  and engage with a vibrant community of writers. Create an
                  account, share your thoughts, and edit your blogs
                  effortlessly. Unleash your creativity and be part of a
                  thriving online ecosystem.
                </p>
                <a href="https://github.com/rajdeepX/mern-blogSite">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <img src="/images/blogSS.jpg" alt="ss" />
              </div>
            </div>
            <div className="project-detail">
              <div className="project-info">
                <h4>BookInn</h4>
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
                <a href="https://react-bookinn-application.netlify.app/">
                  View Project
                </a>
                <a href="https://github.com/rajdeepX/bookInn-project">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <a
                  target="blank"
                  href="https://react-bookinn-application.netlify.app/"
                >
                  <img src="/images/bookInn.png" alt="ss" />
                </a>
              </div>
            </div>
            <div className="project-detail">
              <div className="project-info">
                <h4>CrypTrack</h4>
                <div className="tool-req">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>React Router</p>
                  <p>Sementic UI</p>
                  <p>Rapid Api</p>
                </div>
                <p>
                  Welcome to my React-based cryptocurrency tracker CrypTrack!
                  Here you can find data on various cryptocurrencies. Powered by
                  Rapid API, this dynamic website provides essential
                  information, including prices and historical chart. Explore
                  the exciting world of digital currencies and make informed
                  investment decisions.
                </p>
                <a href="https://cryptrack-react-project.netlify.app/">
                  View Project
                </a>
                <a href="https://github.com/rajdeepX/CrypTrack">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <img src="/images/cryptrack.jpg" alt="ss" />
              </div>
            </div>

            <div className="project-detail">
              <div className="project-info">
                <h4>NoteSync</h4>
                <div className="tool-req">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>Sementic UI</p>
                </div>
                <p>
                  Capture, organize, and never forget with our sleek notes app
                  inspired by Google Keep. Effortlessly jot down thoughts and
                  any important idea you discovered. Enjoy a clean interface,
                  real-time syncing for a seamless note-taking experience. Stay
                  productive and keep your ideas within reach.
                </p>
                <a href="https://notesync-react-project.netlify.app/">
                  View Project
                </a>
                <a href="https://github.com/rajdeepX/NoteSync">
                  View Project Code
                </a>
              </div>
              <div className="project-img-container">
                <img src="/images/noteSync.jpg" alt="ss" />
              </div>
            </div>
            <a
              href="https://github.com/rajdeepX?tab=repositories"
              className="other-project"
            >
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
            target="blank"
          >
            Contact Me
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
