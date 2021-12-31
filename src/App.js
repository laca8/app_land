import "./App.css";
import Header from "./components/Header";
import Fearure from "./components/Fearure";
import About from "./components/About";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import Presentaion from "./components/Presentaion";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Fearure />
      <About
        image={aboutimage}
        title="Comes With All you need for daily life"
        button="Get The App"
      />
      <Presentaion />
      <About
        image={aboutimage1}
        title="Download And Get The App Now"
        button="Download"
      />
      <Contact />
    </div>
  );
};

export default App;
