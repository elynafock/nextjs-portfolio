import React from "react";
const Skills = () => {
  const skills = [
    {
      name: "Git",
      imageSrc: "/git.svg",
    },
    {
      name: "Tailwind",
      imageSrc: "/tailwind-icon.svg",
    },
    {
      name: "Typescript",
      imageSrc: "/typescript-icon.svg",
    },
    {
      name: "NodeJS",
      imageSrc: "/nodejs-icon.svg",
    },
    {
      name: "ReactJS",
      imageSrc: "/reactjs-icon.svg",
    },
    {
      name: "React Native",
      imageSrc: "/reactjs-icon.svg",
    },
    {
      name: "NextJS",
      imageSrc: "/nextjs-icon.svg",
    },
    {
      name: "VueJS",
      imageSrc: "/vuejs-icon.svg",
    },
    {
      name: "NuxtJS",
      imageSrc: "/nuxtjs-icon.svg",
    },
    {
      name: "ExpressJS",
      imageSrc: "/express-js.svg",
    },
    {
      name: "Docker",
      imageSrc: "/docker.svg",
    },
    {
      name: "Redis",
      imageSrc: "/redis.svg",
    },
    {
      name: "MySQL",
      imageSrc: "/mysql.svg",
    },
    {
      name: "Figma",
      imageSrc: "/figma-icon.svg",
    },
  ];

  return (
    <article>
      <h3 className="text-3xl font-bold py-2 mt-8 mb-4">Skills</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-center items-center py-4"
          >
            <img
              src={skill.imageSrc}
              alt={`${skill.name} Icon`}
              width={40}
              height={40}
            />
            {skill.name}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Skills;
