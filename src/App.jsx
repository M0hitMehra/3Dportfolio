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
import back from "../src/assets/heroBack.webp"
const App = () => {
  return (
    <div className="relative z-0 bg-slate-900">
      <div
        className=" bg-cover bg-no-repeat bg-center"
        style={{
          background: `url(${back})`,
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0 ">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
