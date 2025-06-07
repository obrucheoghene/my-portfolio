import { Code } from "lucide-react";
import ReactGA from "react-ga4";

export const AboutSection = () => {
  const roles = [
    {
      title: "WebRTC/Streaming Engineer",
      description: `I specialize in delivering reliable, low-latency real time
                    communication / streaming systems that scale across diverse
                    use cases.`,
    },
    {
      title: "Full Stack Engineer",
      description: `I bridge frontend and backend development to create
                    seamless, scalable digital experiences.`,
    },
  ];

  const handleLinkClick = () => {
    ReactGA.event({
      category: "User Interaction",
      action: "Download CV",
      label: "Download CV",
    });
  };

  return (
    <section id="about" className="py-24 md:px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Engineer
            </h3>

            <p className="text-muted-foreground text-justify">
              I’m a Full-Stack Engineer with a strong passion for building
              real-time communication platforms that empower people and
              organizations to connect, collaborate, and make an impact. With a
              deep focus on performance, scalability, and user experience, I
              design and lead solutions that bring ideas to life and solve
              real-world problems.
            </p>

            <p className="text-muted-foreground"></p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                target="_blank"
                href="https://drive.google.com/file/d/1lL-k66isUOvteHxbehEYz-qdGEgqMq-0/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="gradient-border p-6 card-hover">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{role.title}</h4>
                    <p className="text-muted-foreground">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
