import React from "react";
import AppLayout from "../components/core/AppLayout";
import Skills from "../components/index/Skills";

const portfolio = () => {
  const projects = [
    {
      name: "Whaleader Customer",
      image: "portfolio.jpg",
      description: "Logistic Company for Customer Mobile Application",
    },
    {
      name: "Whaleader Driver",
      image: "portfolio.jpg",
      description: "Logistic Company for Driver Mobile Application",
    },
    {
      name: "AnnGreen",
      image: "portfolio.jpg",
      description: "Redesign website",
    },
    {
      name: "Dusted",
      image: "portfolio.jpg",
      description: "Cleaning Service Mobile Application",
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
