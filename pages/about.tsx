import React from "react";
import AppLayout from "../components/core/AppLayout";

const about = () => {
  return (
    <AppLayout>
      <article>
        <h3 className="text-3xl font-bold py-2 mt-8 mb-4">About Me</h3>
        <div className="gap-y-4 flex flex-col">
          <p>
            Hey there! I’m Elyna — I started out as a frontend developer because
            I love making things look good and feel right. Eventually, I
            ventured into backend development, where I got to explore what
            happens behind the scenes. But the journey didn't stop there! I
            later transitioned into a Software Engineer / Site Reliability
            Engineer (SRE) role, where I found myself building RPA solutions,
            developing real-time dashboards, integrating systems, and keeping
            things running smoothly. Quite a journey from styling components to
            making sure entire systems work seamlessly!
          </p>
          <p>
            Along the way, I've gained experience across different areas of
            software development, from frontend and backend engineering to
            automation, database management, API development, and system
            performance optimization. I've worked with React.js and Vue.js on
            the frontend, while continuing to expand my technical skills across
            backend technologies and infrastructure.
          </p>
          <p>
            Interestingly, one thing I've discovered about myself is that I
            genuinely enjoy talking to users and clients! Understanding their
            needs, gathering business requirements, discussing business
            workflows, and translating ideas into practical technical solutions
            have become some of my favourite parts of the job. I enjoy being the
            bridge between people and technology, making sure that what we build
            doesn't just work, but actually solves real problems.
          </p>
          <p>
            At the end of the day, I love turning ideas into clean, functional,
            and reliable solutions. There's something incredibly satisfying
            about seeing an idea evolve into something real, useful, and
            impactful.
          </p>
          <p>
            When I'm not coding, you'll probably find me café hopping, reading,
            or just enjoying a good cup of coffee (or Houjicha — my new
            favourite over Matcha!).
          </p>
        </div>
      </article>
    </AppLayout>
  );
};

export default about;
