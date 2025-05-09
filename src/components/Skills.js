import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="React Skill Level" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Java Skill Level" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="SQL Skill Level" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Spring Boot Skill Level" />
                  <h5>Spring Boot</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Node.js Skill Level" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="JavaScript Skill Level" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="AWS Skill Level" />
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Decoration" />
    </section>
  );
};
