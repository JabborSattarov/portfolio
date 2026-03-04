import { Header } from "../../components/header/header";
import "./experience.css";

const Experience = () => {
  return (
    <>
      <Header />
      <main className="experience">
        <div className="experience_content">
          <span className="experience_title">Experience</span>
          <h2 className="experience_content_h2">My Professional Journey</h2>
          <h3 className="experience_content_h3">
            A track record of delivering innovative solutions and driving
            results
          </h3>

          <div className="experience_img"></div>
        </div>
        <div className="work">
          <h2 className="work_title">Work Experience</h2>
          <ul className="work_ul">
            <li className="work_list">
              <div className="work_heading">
                <div className="heading_wrap">
                  <h2 className="heading_h2">Backend engeneer</h2>
                  <p className="heading_p">Alpha Electronics</p>
                </div>
                <div className="heading_duration">Jan 2022 - Present</div>
              </div>
              <p className="work_text">
                Leading development of cloud-based SaaS platform serving 100k+
                users. Architected microservices infrastructure and mentored
                junior developers.
              </p>
              <h2 className="work_key">Key Achievements:</h2>
              <ul className="work_ul_in">
                <li className="work_list_in">
                  Reduced API response time by 60% through optimization
                </li>
                <li className="work_list_in">
                  Led team of 5 developers on major product redesign
                </li>
                <li className="work_list_in">
                  Implemented CI/CD pipeline reducing deployment time by 75%
                </li>
              </ul>
            </li>
            <li className="work_list">
              <div className="work_heading">
                <div className="heading_wrap">
                  <h2 className="heading_h2">Backend engeneer</h2>
                  <p className="heading_p">Alpha Electronics</p>
                </div>
                <div className="heading_duration">Jan 2022 - Present</div>
              </div>
              <p className="work_text">
                Leading development of cloud-based SaaS platform serving 100k+
                users. Architected microservices infrastructure and mentored
                junior developers.
              </p>
              <h2 className="work_key">Key Achievements:</h2>
              <ul className="work_ul_in">
                <li className="work_list_in">
                  Reduced API response time by 60% through optimization
                </li>
                <li className="work_list_in">
                  Led team of 5 developers on major product redesign
                </li>
                <li className="work_list_in">
                  Implemented CI/CD pipeline reducing deployment time by 75%
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="work_title">Education</h2>
          <ul className="work_ul">
            <li className="work_list">
              <div className="work_heading">
                <div className="heading_wrap">
                  <h2 className="heading_h2">
                    Bachelor of Science in Computer Science
                  </h2>
                  <p className="heading_p purpil">Alfraganus University</p>
                </div>
                <div className="heading_duration">2022 - 2027</div>
              </div>
              <p className="work_text">
                Focus on Software Engineering and Web Technologies. GPA: 3.8/4.0
              </p>
            </li>
            <li className="work_list">
              <div className="work_heading">
                <div className="heading_wrap">
                  <h2 className="heading_h2">Full Stack Course</h2>
                  <p className="heading_p purpil">
                    Najot Ta'lim Learning Center
                  </p>
                </div>
                <div className="heading_duration">2022 - 2023</div>
              </div>
              <p className="work_text">
                Focus on Software Engineering and Full-Stack Technologies.
              </p>
            </li>
          </ul>
          <div className="sertifications">
            <h2 className="sertifications_h2">Certifications</h2>
            <div className="sertifications_box">
              <div className="sertifications_cards">
                <h2 className="sertifications_cards_h2">
                  Najot Talim Certificate
                </h2>
                <p className="sertifications_cards_p">Najot Ta'lim</p>
              </div>
              <div className="sertifications_cards">
                <h2 className="sertifications_cards_h2">
                  AWS Certified Solutions Architect
                </h2>
                <p className="sertifications_cards_p">Amazon Web Services</p>
              </div>
              <div className="sertifications_cards">
                <h2 className="sertifications_cards_h2">
                  Google Cloud Professional Developer
                </h2>
                <p className="sertifications_cards_p">Google Cloud</p>
              </div>
              <div className="sertifications_cards">
                <h2 className="sertifications_cards_h2">
                  Meta Front-End Developer Professional
                </h2>
                <p className="sertifications_cards_p">Meta</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
