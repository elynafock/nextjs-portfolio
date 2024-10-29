import React from "react";
import AppLayout from "../components/core/AppLayout";
import Skills from "../components/index/Skills";

const portfolio = () => {
  const projects = [
    {
      name: "Un Poco Loco",
      image: "unpocoloco.png",
      description:
        "This website is an improved version of Elyna's Collection as new features are added using Supabase",
      link: "https://pocoloco.vercel.app/",
    },
    {
      name: "Elyna's Collection",
      image: "elynas-collection.png",
      description:
        "This website is built to store digital illustrations drawn using SveletKit and Firebase",
      link: "https://elynascollection.netlify.app/",
    },
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
      link: "https://www.figma.com/file/m0zJK2QmB4NDgyExr95Vls/Untitled?node-id=0%3A1&t=Over73eJSJCMJGsa-0",
    },
    {
      name: "Break-Fast",
      image: "break-fast.png",
      description:
        "Take responsibility in research, design and prototyping high-fidelity design",
      link: "https://www.figma.com/file/N2xdUoNKSqprC3Kg0MpT9Y/Intelligent-System-Assignment?node-id=0%3A1&t=23peKe9MlEtrAKc0-0",
    },
  ];
  return (
    <AppLayout>
      <article>
        <h3 className="text-3xl font-bold py-2 mt-8 mb-4">Portfolio</h3>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.name}
              className="flex flex-col gap-y-1 hover:no-underline shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-neutral-200 rounded-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="aspect-video object-cover rounded-t-lg"
              />
              <div className="px-4 pt-2 pb-4">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="font-light text-xs text-gray-500  ">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </article>
    </AppLayout>
  );
};

export default portfolio;
