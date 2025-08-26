import { ArrowDown } from "lucide-react";
import ReactGA from "react-ga4";

export const HeroSection = () => {
  const handleLinkClick = () => {
    ReactGA.event({
      category: "User Interaction",
      action: "Download CV",
      label: "Download CV",
    });
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center md:px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className=" flex justify-center items-center">
            <img
              src="/photo.jpg "
              alt=""
              className=" aspect-square rounded-full h-44 md:lg:h-52 lg:h-72 border-8"
            />
          </div>

          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, {`I'm`}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Obruche
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Wilfred
            </span>
          </h1>
          <p>Full Stack Engineer | WebRTC Engineer</p>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a Full-Stack Engineer passionate about building real-time
            communication platforms that connect people and power global
            collaboration. I design and lead innovative solutions that drive
            impact at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#works" className="cosmic-button">
              Work Experience
            </a>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/1EkMkIpJDSRYQFwHSFWThGfwgo2MgveyM/view?usp=sharing"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
