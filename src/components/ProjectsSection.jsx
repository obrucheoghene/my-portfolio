import { ArrowRight } from "lucide-react";
import { ProjectItem } from "./ProjectItem";

const projects = [
  {
    id: 1,
    title: "Colloquium - Video Conferencing",
    description:
      "Colloquium is a secure, real-time video conferencing platform designed to meet diverse and dynamic communication and collaboration needs. It offers features such as high-quality audio and video calls, screen sharing, live chat, emoji reactions, and more—ensuring seamless, engaging, and efficient virtual meetings.",
    image: [
      "/projects/colloq1.jpg",
      "/projects/colloq2.jpg",
      "/projects/colloq3.jpg",
    ],
    tags: [
      "WebRTC",
      "MediaSoup",
      "FFmpeg",
      "NodeJs",
      "SocketIO",
      "Typescript",
      "Mongodb",
      "AWS",
      "React",
      "TailwindCSS",
    ],
    demoUrl: "https://thecolloquium.online/lmj-wydm-vvh",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Joble Meeting - AI Powered Conferencing",
    description:
      "Joble Meeting is an AI-powered video conferencing platform designed to enhance virtual collaboration through AI transcription, real-time translation, brainstorming tools, automated actions and note-taking. Built to support seamless communication across languages and teams.",
    image: [
      "/projects/joble1.jpg",
      "/projects/joble2.jpg",
      "/projects/joble3.jpg",
    ],
    tags: [
      "WebRTC",
      "MediaSoup",
      "FFmpeg",
      "NodeJs",
      "SocketIO",
      "Typescript",
      "AWS",
      "GCP",
      "React",
      "TailwindCSS",
    ],
    demoUrl: "https://meet.jobpro.app/iam-jlj-ydq?d=zarttech",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Christ Oyahkilome Foundation International",
    description:
      "Official Oyahkilome Foundation International website, showcasing their mission, projects, and donation initiatives with a clean, responsive design and smooth user experience.",
    image: [
      "/projects/cofi1.jpg",
      "/projects/cofi2.jpg",
      "/projects/cofi3.jpg",
    ],
    tags: [
      "NextJs",
      "NodeJs",
      "Typescript",
      "TailwindCSS",
      "MongoDb",
      "FlutterWave",
    ],
    demoUrl: "https://cofi.ngo",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Loveworld International Office USA",
    description:
      "Built the official website for Loveworld International Office USA, highlighting their mission, events, and outreach with a responsive design and intuitive user experience.",
    image: [
      "/projects/lwintl1.jpg",
      "/projects/lwintl2.jpg",
      "/projects/lwintl3.jpg",
    ],
    tags: ["NextJs", "Node.js", "Typescript", "TailwindCSS", "Stripe"],
    demoUrl: "https://loveworldintlofficeusa.org",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/obrucheoghene"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
