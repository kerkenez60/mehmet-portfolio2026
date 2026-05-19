import Head from "next/head";
import MyNavbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mehmet Portfolio | Fullstack Developer</title>
        <meta name="description" content="Freelance Fullstack Developer - Next.js, Bootstrap, MongoDB projeleri" />
        <meta name="keywords" content="Next.js, Bootstrap, Fullstack, Portfolio, Freelance Developer" />
        <meta name="author" content="Mehmet" />
      </Head>
      <MyNavbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
