import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/spotify.png";
import projImg2 from "../assets/img/taskmaster.png";
import projImg3 from "../assets/img/storycolab.png";
import projImg4 from "../assets/img/toursandtravel.png";
import projImg5 from "../assets/img/carrentals.png";
import projImg6 from "../assets/img/dreamdestiny.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projectsTab1 = [
    { title: "Spotify Template", description: "Frontend", imgUrl: projImg1, link: "https://spotify-template.netlify.app/" },
    { title: "TaskMaster", description: "Java Full Stack", imgUrl: projImg2, link: "https://github.com/hmiryala1010/TASKMASTER" },
    { title: "Story Collab", description: "MERN Stack", imgUrl: projImg3, link: "https://makeyummytime.netlify.app" },
  ];

  const projectsTab2 = [
    { title: "Tours and Travels", description: "Frontend", imgUrl: projImg4, link: "https://tours-and-travels-by-hasinimiryala.netlify.app/" },
    { title: "Car Rental System", description: "Frontend", imgUrl: projImg5, link: "https://carrentals-by-hasinimiryala.netlify.app/" },
    { title: "Dream Destiny", description: "MERN FullStack", imgUrl: projImg6, link: "https://dream-destiny.netlify.app/" },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Stay tuned for upcoming projects.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"/>
    </section>
  );
};
