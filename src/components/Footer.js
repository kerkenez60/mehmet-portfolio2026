import React from "react";
import { Container } from "react-bootstrap";
import { useLanguage } from "../LanguageContext";

const Footer = () => {
    const { lang } = useLanguage();

    const texts = {
        tr: {
            copyright: "© 2026 Mehmet. Tüm hakları saklıdır.",
            made: "Bu site Next.js ve Bootstrap ile yapılmıştır."
        },
        en: {
            copyright: "© 2026 Mehmet. All rights reserved.",
            made: "This site is built with Next.js and Bootstrap."
        }
    };

    return (
        <footer className="bg-dark text-light py-3">
            <Container className="text-center">
                <p className="mb-1">{texts[lang].copyright}</p>
                <small>{texts[lang].made}</small>
            </Container>
        </footer>
    );
};

export default Footer;
