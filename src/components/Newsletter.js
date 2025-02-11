import { useState } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import hi from "../assets/img/banner-bg.png";

// Static blog data
const blogs = [
  {
    title: "The Future of Technology",
    description: "AI and automation are revolutionizing industries.",
    image: hi,
    link: "#",
  },
  {
    title: "Top 10 Travel Destinations",
    description: "Explore breathtaking locations worldwide.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Mastering Productivity",
    description: "Proven techniques to stay organized and focused.",
    image: "https://via.placeholder.com/300",
    link: "#",
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
