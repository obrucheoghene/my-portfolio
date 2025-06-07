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
        "Architected and deployed Joble Meeting, an AI-powered WebRTC conferencing featuring multilingual transcription, actions detection, and note-taking to enhance remote team collaboration and productivity.",
        "Designed and implemented Joble Call, a scalable one-to-one and group video calling, supporting up to 100 participants per session.",
        "Leveraged Mediasoup SFU to engineer low-latency, scalable, many-to-many video conferencing capabilities.",
        "Integrated FFmpeg and Puppeteer to enable high-quality video/audio recording and processing.",
        "Embedded AI-driven analytics to measure and enhance meeting efficiency and user engagement.",
      ],
    },
    {
      companyName: "Black Mental Health Matters Inc.",
      jobTitle: "Back End Engineer",
      location: "USA, Remote",
      duration: "June 2023 - March 2024",
      logo: "/icons/bmhm.png",
      responsibilities: [
        "Developed secure and scalable APIs with Node.js and TypeScript to connect patients with therapists.",
        "Implemented robust authentication and authorization mechanisms, ensuring platform security.",
        "Optimized database queries and backend processes, reducing latency and improving performance.",
        "Contributed to improving code quality through constructive feedback and code reviews.",
      ],
    },
    {
      companyName: "Mission Network Service Center",
      jobTitle: "Full Stack Engineer",
      location: "Lagos, Nigeria",
      duration: "June 2023 - March 2024",
      logo: "/icons/msnc.png",
      responsibilities: [
        "Designed and implemented a scalable multiparty video and audio conferencing system using WebRTC and Mediasoup SFU, enabling real-time, high-quality communication for large-scale group calls.",
        "Deployed and maintained a production-grade Jitsi Meet instance, ensuring reliable, high-quality internal and external meetings.",
        "Configured and managed a BigBlueButton instance to support virtual learning and interactive online sessions.",
        "Built and integrated secure e-commerce and NGO service platforms, incorporating payment processing and streamlined workflows.",
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
