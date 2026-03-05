import { Link } from "react-router-dom";
import * as fs from "fs";
import {
  DownloadIcon,
  GamilIcon,
  GithubIcon,
  LinkedinIcon,
} from "../../assets/icons";
import { Header } from "../../components/header/header";
import "./home.css";
import "../../../public/cv.pdf"

const Home = () => {

  return (
    <>
      <Header />
      <main className="home_body">
        <div className="content">
          <div className="context">
            <span className="context_wellcome">Wellcome to my portfolio</span>
            <h2 className="context_introduction">
              Hi, I'm <span className="logo">Abdujabbor Sattarov</span>
            </h2>
            <h4 className="context_professtion">
              Full-Stack Developer & Creative Problem Solver
            </h4>
            <p className="context_text">
              I craft elegant digital experiences with clean code and innovative
              solutions. Passionate about building scalable applications that
              make a difference.
            </p>
          </div>
          <div className="buttons">
            <Link to={"/experience"} className="buttons_view">
              View my work{" "}
            </Link>
            <button
              className="buttons_resume"
              onClick={() => window.open("../../../public/cv.pdf")}
            >
              Resume <DownloadIcon className={"downlaod_icon ml_10"} />
            </button>
          </div>
          <div className="icons">
            <div className="icon_wrapper">
              <GithubIcon className={"icon"} />
            </div>
            <div className="icon_wrapper">
              <LinkedinIcon className={""} />
            </div>
            <div className="icon_wrapper">
              <GamilIcon className={"icon"} />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="cards">
          <h2 className="num">2+</h2>
          <h3 className="text">Years Experience</h3>
        </div>
        <div className="cards">
          <h2 className="num">10+</h2>
          <h3 className="text">Complated Projects</h3>
        </div>
        <div className="cards">
          <h2 className="num">30+</h2>
          <h3 className="text">Happy Clients</h3>
        </div>
      </footer>
    </>
  );
};

export default Home;
