import Hero from "../components/LandingPage/Hero";
import Info from "../components/LandingPage/Info";
import Shoping_landing from "../components/LandingPage/Shoping_landing";
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
      <Shoping_landing />
      <Services />
      <Collections />
      <Testimonials />
      <Collaboration />
      <Instagram />
      <SignIn />
    </>
  );
};
export default HomePage;
