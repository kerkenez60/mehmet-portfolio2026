import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLanguage } from "../LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();

  const texts = {
    tr: {
      title: "İletişim",
      name: "Adınız",
      email: "E-posta",
      message: "Mesajınız",
      send: "Gönder"
    },
    en: {
      title: "Contact",
      name: "Your Name",
      email: "Email",
      message: "Your Message",
      send: "Send"
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">{texts[lang].title}</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>{texts[lang].name}</Form.Label>
            <Form.Control type="text" placeholder={texts[lang].name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{texts[lang].email}</Form.Label>
            <Form.Control type="email" placeholder={texts[lang].email} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>{texts[lang].message}</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder={texts[lang].message} />
          </Form.Group>

          <Button variant="primary" type="submit">
            {texts[lang].send}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
