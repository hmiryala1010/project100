import { useState } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import hi from "../assets/img/blog1.jpg";
import hi2 from "../assets/img/blog2.jpeg";
import hi3 from "../assets/img/blog3.jpeg";
// Static blog data
const blogs = [
  {
    title: "TIn the blink of an eye: The intersection of time, travel, and technology.",
    description: "Do you know time, travel, and technology are no longer separate concepts?",
    image: hi,
    link: "https://medium.com/@hasini.miryala7585/in-the-blink-of-an-eye-the-intersection-of-time-travel-and-technology-6080e63b6769",
  },
  {
    title: "CSS Backgrounds",
    description: "let us know a clear picture of CSS backgrounds",
    image: hi2,
    link: "https://medium.com/@hasini.miryala7585/css-backgrounds-aa8395875c8b",
  },
  {
    title: "Why Learning New Skills is a Game-Changer in the IT Industry? ",
    description: "If you’re thinking about a career in IT, here’s something you need to know",
    image: hi3,
    link: "https://medium.com/@hasini.miryala7585/why-learning-new-skills-is-a-game-changer-in-the-it-industry-e6a5e65968a4",
  },
];

export const Newsletter = () => {
  return (
    <Container className="d-flex justify-content-center"> {/* Centering all cards */}
      <Col lg={12} className="px-2"> {/* Reduced outside padding */}
        <div className="newsletter-bx wow slideInUp p-3 text-center"> {/* Adjusted padding inside the layout */}
          <h3 className="text-center">Latest Blogs & Updates</h3>
          <Row className="justify-content-center"> {/* Centering row content */}
            {blogs.map((blog, index) => (
              <Col key={index} md={6} lg={4} className="mb-3 d-flex justify-content-center"> {/* Centering individual cards */}
                <Card className="blog-card" style={{ width: "14rem" }}> {/* Further reduced card size */}
                  <Card.Img variant="top" src={blog.image} style={{ height: "140px", width: "100%", objectFit: "cover" }} alt={blog.title} /> {/* Adjusted image to fit properly */}
                  <Card.Body>
                    <Card.Title style={{ fontSize: "0.9rem" }}>{blog.title}</Card.Title>
                    <Card.Text style={{ fontSize: "0.8rem" }}>{blog.description}</Card.Text>
                    <a href={blog.link} className="btn btn-primary btn-sm">
                      Read More
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Container>
  );
};
