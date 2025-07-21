import Hero from "./components/LandingPage/Hero";
import Info from "./components/LandingPage/Info";
import Services from "./components/LandingPage/Services";
import Collections from "./components/LandingPage/Collections";
import Testimonials from "./components/LandingPage/Testimonials";
import Collaboration from "./components/LandingPage/Collaboration";
import Instagram from "./components/LandingPage/Instagram";
import SignIn from "./components/LandingPage/SignIn";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Stick from "./common/Stick";


const HomePage = () => {
  return (
    <>
     <Stick />
      <Nav/>
      <Hero />
      <Info />
      <Collections />
      <Services />
      <Testimonials />
      <Collaboration />
      <Instagram />
      <SignIn />
      <Footer/>
    </>
  );
};

export default HomePage;
