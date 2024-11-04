import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/projimg1.png";
import projImg3 from "../assets/images/projimg3.png";
import projImg4 from "../assets/images/projimg4.png";

import colorSharp2 from "../assets/images/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
        title:"Crop Disease Detection",
        description:"Machine Learning",
        imgUrl:projImg1,
    },
    
    {
        title:"Horse VS Human Classification",
        description:"Image Recognition",
        imgUrl:projImg3,
    },
    {
        title:"Handwriting Recognition",
        description:"Natural Language Processing",
        imgUrl:projImg4,
    },


    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={1}>
            
                <h2>Projects</h2>
                <p>I’ve worked on diverse projects that apply machine learning, image recognition, 
                            and natural language processing to solve real-world challenges. These include models for detecting crop diseases,
                            classifying images,and recognizing handwritten text, each designed
                             to deliver practical and impactful solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}