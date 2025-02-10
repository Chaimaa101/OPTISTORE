import Hero from "../components/LandingPage/Hero";
import Info from "../components/LandingPage/Info";
import Services from "../components/LandingPage/Services";
import Collections from "../components/LandingPage/Collections";
import Testimonials from "../components/LandingPage/Testimonials";
import Collaboration from "../components/LandingPage/Collaboration";
import Instagram from "../components/LandingPage/Instagram";
import SignIn from "../components/LandingPage/SignIn";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Info />
      <Collections />
      <Services />
      <Testimonials />
      <Collaboration />
      <Instagram />
      <SignIn />
    </>
  );
};
export default HomePage;
