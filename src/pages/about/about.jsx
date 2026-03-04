import "./about.css";
import { Header } from "../../components/header/header";

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
        <div className="about_content">
          <span className="content_aboutme">About me</span>
          <h2 className="content_h2">Get to know me</h2>
          <h3 className="content_h3">
            Passionate developer with a love for creating impactful digital
            experiences
          </h3>
        </div>
        <div className="story">
          <h3 className="story_title">My Story</h3>
          <p className="story_text">
            I am a backend developer focused on building reliable and scalable
            systems with Node.js.
            <br />
            <br />
            I started my journey with JavaScript and quickly became interested
            in understanding how things work internally — from the event loop to
            asynchronous programming and system performance.
            <br />
            <br />
            I worked with TCP connections and meter communication protocols like
            Modbus, CAS, and DLMS, building backend services that process
            real-time device data. This experience helped me develop strong
            fundamentals in networking and backend architecture.
            <br />
            <br />
            Currently, I am improving my TypeScript skills and learning NestJS
            to build more structured and scalable applications. My goal is to
            grow from junior to middle-level developer by strengthening my
            technical depth and system design skills.
            <br />
            <br />
            This is just the beginning of my journey.
          </p>
          <div className="about_cards">
            <div className="card">
              <h4 className="card_h4">Location</h4>
              <h3 className="card_h3">Tashkent Uzbekistan</h3>
            </div>
            <div className="card">
              <h4 className="card_h4">Education</h4>
              <h3 className="card_h3">Alfraganus</h3>
            </div>
          </div>
        </div>
        <div className="technical_skils">
          <h2 className="technical_skills_h2">Technical Skills</h2>
          <div className="card_box">
            <div className="skills_cards">Javascript/Typescript</div>
            <div className="skills_cards">Node.js</div>
            <div className="skills_cards">Express.js</div>
            <div className="skills_cards">Nest.js</div>
            <div className="skills_cards">PostgreSQL</div>
            <div className="skills_cards">Mongo DB</div>
            <div className="skills_cards">Mongoose</div>
            <div className="skills_cards">TypeORM</div>
            <div className="skills_cards">Prisma</div>
            <div className="skills_cards">React.js</div>
            <div className="skills_cards">Microservices</div>
            <div className="skills_cards">GraphQL</div>
          </div>
        </div>

        <div className="values">
          <h2 className="values_h2">What I Value</h2>
          <div className="values_box">
            <div className="values_cards">
              <h2 className="values_cards_h2">Clean Code</h2>
              <p className="values_cards_p">
                Writing maintainable, scalable, and well-documented code is my
                priority.
              </p>
            </div>
            <div className="values_cards">
              <h2 className="values_cards_h2">Design Focused</h2>
              <p className="values_cards_p">
                Creating beautiful, intuitive interfaces that users love to
                interact with.
              </p>
            </div>
            <div className="values_cards">
              <h2 className="values_cards_h2">Innovation</h2>
              <p className="values_cards_p">
                Always exploring new technologies and methodologies to stay
                ahead.
              </p>
            </div>
            <div className="values_cards">
              <h2 className="values_cards_h2">Collaboration</h2>
              <p className="values_cards_p">
                Working effectively in teams and communicating ideas clearly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
