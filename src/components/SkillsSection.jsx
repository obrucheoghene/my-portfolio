const skills = [
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "Pava", icon: "/icons/java.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "PHP", icon: "/icons/php.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/nextjs.png" },
  { name: "Node.js", icon: "/icons/nodejs.png" },
  { name: "WebRTC", icon: "/icons/webrtc.png" },
  { name: "FFmpeg", icon: "/icons/ffmpeg.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "Docker", icon: "/icons/docker.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "PostgreSql", icon: "/icons/postgresql.png" },
  { name: "AWS", icon: "/icons/aws.png" },
  { name: "GCP", icon: "/icons/gcp.png" },
  { name: "Mediasoup", icon: "/icons/mediasoup.png" },
  { name: "Jitsi", icon: "/icons/jitsi.png" },
  { name: "BigBlueButton", icon: "/icons/bbb.png" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
              flex flex-col items-center space-y-2 
              bg-card 
              backdrop-blur-sm 
              rounded-2xl 
              p-4 
              shadow-md 
              hover:shadow-xl 
              transition 
              duration-200
              w-full
              max-w-[120px]
            "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain "
              />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
