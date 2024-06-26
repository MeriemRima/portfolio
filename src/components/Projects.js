import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rewardaApp.png";
import projImg2 from "../assets/img/multi.png";
import projImg3 from "../assets/img/pasterieApp.png";
import projImg4 from "../assets/img/hote5s.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
   
    {
      title: "Pastry Shop Mobile App",
      description: " A mobile application for a pastry shop that allows users to browse all available products and place orders directly from their phones.",
      imgUrl: projImg3,
      role: "Backend and Integration", // Specify your role here

    },
    {
      title: "Mission-Based Rewards App",
      description: " A mobile application that offers various missions. Users can complete missions to earn rewards or payments. ",
      imgUrl: projImg1,
      role: "Full Stack Development (Frontend & Backend)",

    },
    {
      title: " Multi-Service Platform",
      description: " A comprehensive platform featuring Three mobile applications: one for users to request services and one for service providers to manage their offerings and another for Driver Taxi.",
      imgUrl: projImg2,
      role:" Full Stack Developement(frontend & backend)"
    },
    {
      title: "Hotel Reservation Website",
      description: "A simple website for hotel reservations, allowing users to view all hotels, choose one, and make a reservation.",
      imgUrl: projImg4,
      role:"frontend"
    },
  ];

  return (
    <section className="projects-section" id="projects">
    <Container>
      <Row>
        <Col xs={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={`projects-container ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                <h2>Projects</h2>
                <p>
                  Here are some of the projects I have worked on. All projects were fully developed by me, handling both front-end and back-end development.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* Tabs can be added here if needed */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                    <Tab.Pane eventKey="first">
                      <Row xs={1} md={2} lg={3} className="g-4">
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    {/* Additional Tab.Pane items can be added here if needed */}
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="background" />
  </section>
  )
}
