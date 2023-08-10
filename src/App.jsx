import { Route, Router } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
const App = () => {
  return (
    <div className="relative z-0 bg-slate-900">
      <div className="bg-[url(https://wallpaperaccess.com/full/2454628.png)] bg-cover bg-no-repeat bg-center" >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0 ">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
