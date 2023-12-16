import Navbar from "../../Components/Navbar/Navbar";
import Main from "../../Components/Main/Main";
import Services from "../../Components/Services/Services";
import About from "../../Components/AboutUs/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
function HomePage() {
  return (
    <div className="HomePage" id="HomePage">
      <Navbar />
      <Main />
      <About />
      <Services /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
