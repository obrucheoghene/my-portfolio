import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
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
          <p>Full-Stack WebRTC Engineer | Real-Time Communication Specialist</p>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a Full-Stack Engineer passionate about building real-time
            communication platforms that connect people and power global
            collaboration. I design and lead innovative solutions that drive
            impact at scale.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#works" className="cosmic-button">
              View My Works
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
