import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              Passionate Front-End Developer with a strong foundation in JavaScript (ES6+), React.js, and responsive UI development.
Skilled at transforming UI/UX designs into efficient and accessible web interfaces using modern front-end technologies.
            </p>

            <p className="text-muted-foreground">
              Experienced in building reusable components, managing application state with React Hooks, and integrating RESTful APIs.
Seeking to contribute as a React.js Developer Intern by leveraging problem-solving ability, design skills, and a collaborative
mindset.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="\public\resume.pdf"
                download="Tony_Main_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-End Development</h4>
                  <p className="text-muted-foreground">
                    Frontend development involves building the visual and interactive aspects of a website or web application that users directly engage with. It focuses on technologies like HTML, CSS, and JavaScript and React.js to create responsive, accessible, and user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend-End Development</h4>
                  <p className="text-muted-foreground">
                    Backend development focuses on server-side logic, databases, and APIs that power the functionality behind web applications. It ensures data processing, authentication, and communication between the frontend and the server using technologies like Node.js, Express, and MongoDB.  
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI UX Design</h4>
                  <p className="text-muted-foreground">
                    UI/UX design focuses on creating visually appealing interfaces (UI) and enhancing user satisfaction through intuitive and seamless experiences (UX). It involves understanding user behavior, wireframing, prototyping, and optimizing usability across devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
