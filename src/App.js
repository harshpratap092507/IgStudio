import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import SubscribeSection from "./components/SubscibeSection/SubscribeSection.jsx";
import Introduce from "./components/InroduceSection/IntroduceSection.jsx";
import ChooseUs from "./components/WhyChooseUs/WhyChooseus.jsx";
import ClientSeaction from "./components/ClientSection/ClientSection.jsx";
import Team from "./components/TeamSection/TeamSection.jsx";
import AreaOfPractice from "./components/AreaOfPractice/AreaOfPractice.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import Hero from "./components/Hero/HeroSection/HeroSection.jsx";
function App() {
  return (
    <div className="App">
      <Hero />
      <Introduce />
      <ChooseUs />
      <AreaOfPractice />
      <ClientSeaction />
      <Team />
      <Faq />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
