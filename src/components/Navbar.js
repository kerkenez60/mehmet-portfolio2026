import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLanguage } from "../LanguageContext";

const MyNavbar = () => {
  const { setLang } = useLanguage();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mehmet Portfolio</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link onClick={() => setLang("tr")}>TR</Nav.Link>
          <Nav.Link onClick={() => setLang("en")}>EN</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
