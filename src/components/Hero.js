import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLanguage } from "../LanguageContext";

const Hero = () => {
  const { lang } = useLanguage(); // Navbar'dan gelen dil state'i

  const texts = {
    tr: {
      welcome: "Merhaba, Ben Mehmet",
      intro: "Freelance Fullstack Developer olarak modern web uygulamaları geliştiriyorum.",
      projects: "Projelerime Göz At",
      contact: "İletişime Geç"
    },
    en: {
      welcome: "Hello, I'm Mehmet",
      intro: "I develop modern web applications as a Freelance Fullstack Developer.",
      projects: "View My Projects",
      contact: "Get in Touch"
    }
  };

  return (
    <section className="bg-light text-dark py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">{texts[lang].welcome}</h1>
            <p className="lead">{texts[lang].intro}</p>
            <Button variant="primary" href="#projects" className="me-2">
              {texts[lang].projects}
            </Button>
            <Button variant="outline-dark" href="#contact">
              {texts[lang].contact}
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="/images/dev.jpg"
              alt="Mehmet Developer"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

