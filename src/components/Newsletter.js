import { Col, Row, Card, Container } from "react-bootstrap";
import hi from "../assets/img/blog1.jpg";
import hi2 from "../assets/img/blog2.jpeg";
import hi3 from "../assets/img/blog3.jpeg";

const blogs = [
  {
    title: "In the Blink of an Eye: The Intersection of Time, Travel, and Technology",
    description: "Did you know time, travel, and technology are no longer separate concepts?",
    image: hi,
    link: "https://medium.com/@hasini.miryala7585/in-the-blink-of-an-eye-the-intersection-of-time-travel-and-technology-6080e63b6769",
  },
  {
    title: "CSS Backgrounds",
    description: "Let's explore a clear picture of CSS backgrounds.",
    image: hi2,
    link: "https://medium.com/@hasini.miryala7585/css-backgrounds-aa8395875c8b",
  },
  {
    title: "Why Learning New Skills is a Game-Changer in the IT Industry?",
    description: "If you’re thinking about a career in IT, here’s something you need to know.",
    image: hi3,
    link: "https://medium.com/@hasini.miryala7585/why-learning-new-skills-is-a-game-changer-in-the-it-industry-e6a5e65968a4",
  },
];

export const Newsletter = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Col lg={12} className="px-2">
        <div className="newsletter-bx wow slideInUp p-4 text-center">
          <h3 className="text-center mb-4">Latest Blogs & Updates</h3>
          <Row className="justify-content-center">
            {blogs.map((blog, index) => (
              <Col key={index} md={6} lg={4} className="mb-4 d-flex justify-content-center">
                <Card className="blog-card shadow-sm border-0" style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src={blog.image}
                    style={{ height: "150px", width: "100%", objectFit: "cover" }}
                    alt={blog.title}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ fontSize: "0.95rem", fontWeight: "600" }}>{blog.title}</Card.Title>
                    <Card.Text style={{ fontSize: "0.85rem" }}>{blog.description}</Card.Text>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-auto">
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
