import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLanguage } from "../LanguageContext"; // Dil context'i import

const Projects = () => {
  const { lang } = useLanguage(); // Navbar'dan gelen dil state'i

  const texts = {
    tr: {
      title: "Projelerim",
      project1: "Next.js ve Bootstrap kullanarak modern bir portföy sitesi.",
      project2: "React + MongoDB ile tam entegre e-ticaret uygulaması.",
      project3: "SEO uyumlu, çoklu dil destekli blog sistemi.",
      details: "Detaylar"
    },
    en: {
      title: "My Projects",
      project1: "A modern portfolio site built with Next.js and Bootstrap.",
      project2: "A fully integrated e-commerce app using React + MongoDB.",
      project3: "SEO-friendly blog system with multi-language support.",
      details: "Details"
    }
  };

  return (
    <section id="projects" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">{texts[lang].title}</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Portfolio Website</Card.Title>
                <Card.Text>{texts[lang].project1}</Card.Text>
                <Button variant="primary">{texts[lang].details}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>E-Commerce App</Card.Title>
                <Card.Text>{texts[lang].project2}</Card.Text>
                <Button variant="primary">{texts[lang].details}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Blog Platform</Card.Title>
                <Card.Text>{texts[lang].project3}</Card.Text>
                <Button variant="primary">{texts[lang].details}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
