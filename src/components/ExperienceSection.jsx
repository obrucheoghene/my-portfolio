import { ArrowRight } from "lucide-react";

export const ExperienceSection = () => {
  const experienceList = [
    {
      companyName: "Zarttech x Joble",
      jobTitle: "Head of Communication Engineering | FullStack WebRTC Engineer",
      location: "Netherlands, Remote",
      duration: "October 2023 - May 2025",
      logo: "/icons/zarttech.png",
      responsibilities: [
        "Built Joble Meeting, an AI-powered WebRTC platform with multilingual transcription, note-taking, and meeting efficiency analytics, resulting in a 35% boost in team productivity.",
        "Engineered Joble Call, a scalable video calling solution, supporting up to a 100 participants per session, achieving 99.9% uptime and low-latency performance.",
        "Re-engineered chat services for scalability and real-time message delivery, boosting reliability and driving adoption across Zarttech and external clients.",
        "Integrated Mediasoup SFU and FFmpeg to enable real-time streaming, high-quality recording, and automated media processing.",
      ],
    },
    {
      companyName: "Black Mental Health Matters Inc.",
      jobTitle: "Back End Engineer",
      location: "USA, Remote",
      duration: "June 2023 - March 2024",
      logo: "/icons/bmhm.png",
      responsibilities: [
        "Developed secure, scalable RESTful APIs enabling therapist-patient connections for thousands of users.",
        "Implemented robust auth systems, reducing unauthorized access by 100% and strengthening platform security.",
        "Optimized backend processes and queries, cutting response times by 30% and enhancing performance.",
        "Conducted thorough code reviews, improving code quality and team productivity.",
      ],
    },
    {
      companyName: "Mission Network Service Center",
      jobTitle: "Full Stack Engineer",
      location: "Lagos, Nigeria",
      duration: "June 2023 - March 2024",
      logo: "/icons/msnc.png",
      responsibilities: [
        "Deployed and maintained a production-grade Jitsi Meet instance with 99.9% uptime, ensuring seamless internal and external meetings.",
        "Implemented a Mediasoup SFU-based conferencing platform to replace the Jitsi instance, thereby meeting specific design needs and supporting 500+ participants with improved quality and flexibility.",
        "Configured and managed BigBlueButton for virtual learning, supporting over 50 interactive sessions weekly.",
        "Ensured platforms stability and performance through proactive monitoring, issue resolution, and regular optimization.",
      ],
    },
  ];

  return (
    <section id="works" className="py-24 md:px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary"> Experience</span>
        </h2>

        <div className="flex flex-col gap-4">
          {experienceList.map((value) => (
            <div
              key={value.companyName}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="p-3 rounded-full aspect-square h-14 flex justify-center items-center bg-primary/10">
                  <img src={value.logo} />
                </div>
                <div className=" flex flex-col gap-3 text-left  w-full">
                  <div className=" flex flex-col md:flex-row justify-between">
                    <div>
                      <h1 className=" text-lg text-primary ">
                        {value.companyName}
                      </h1>
                      <h3>{value.jobTitle}</h3>
                    </div>
                    <div className="text-left md:text-right">
                      <p>{value.location}</p>
                      <p>{value.duration}</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground flex flex-col gap-2">
                    {value.responsibilities.map((item) => (
                      <p key={item}>☑️ {item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/obruche-wilfred-software-engineer/"
          >
            See More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
