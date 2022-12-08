import React from "react";
import AppLayout from "../components/core/AppLayout";
import Skills from "../components/index/Skills";

const portfolio = () => {
  const projects = [
    {
      name: "Whaleader Logistic",
      image: "whaleader-logistics.png",
      description:
        "Collect requirement, research, analyze, design prototype and collaborate with front-end developer ",
      link: "https://play.google.com/store/apps/details?id=com.whaleader.customer",
    },
    {
      name: "Whaleader Logistics Driver",
      image: "whaleader-logistics-driver.png",
      description:
        "Collect requirement, research, analyze, design prototype and collaborate with front-end developer",
      link: "https://play.google.com/store/apps/details?id=com.whaleader.driver",
    },
    {
      name: "ArnGreen",
      image: "arngren.png",
      description:
        "Redesigned https://www.arngren.net/ and developed a high-fidelity website",
      link: "https://fakearngren.netlify.app/",
    },
    {
      name: "Dusted",
      image: "dusted.png",
      description:
        "Take responsibility in research, design and prototyping high-fidelity design",
    },
    {
      name: "Break-fast",
      image: "portfolio.jpg",
      description: "Help people",
    },
    {
      name: "Digital Illustration + Firebase Project",
      image: "portfolio.jpg",
      description: "Digital Illustration + Firebase Project",
    },
  ];
  return (
    <AppLayout>
      <article>
        <h3 className="text-3xl font-bold py-2 mt-8 mb-4">Portfolio</h3>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col gap-y-1">
              <img
                src={project.image}
                alt={project.name}
                className="aspect-video object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="font-light text-xs text-gray-500">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </AppLayout>
  );
};

export default portfolio;
