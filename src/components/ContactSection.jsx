import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {`  Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.`}
        </p>

        <div className="flex justify-center gap-12">
          <div className=" space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium "> Email</h4>
                  <a
                    href="mailto:wilfredcloudspace@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    wilfredcloudspace@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+2348112272488"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 811 2272 488
                  </a>
                </div>
              </div>
              {/* <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vancouver, BC, Canada
                  </a>
                </div>
              </div> */}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/obruche-wilfred-software-engineer/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/obrucheoghene" target="_blank">
                  <Twitter />
                </a>
                <a href="https://github.com/obrucheoghene" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
