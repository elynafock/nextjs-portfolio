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
            I love making things look good and feel right. But somewhere along
            the way, I blinked and suddenly I was spinning up Docker containers,
            managing Redis, and writing APIs in Express. So, I guess you could
            call me a frontend dev turned part-time backend adventurer.
          </p>
          <p>
            I enjoy turning ideas into clean, functional apps — and I get a
            weird sense of satisfaction from turning ideas into real, working
            things. I’ve worked with React.js and Vue.js on the frontend, and
            I’ve been steadily building up my backend muscle too.
          </p>
          <p>
            When I’m not coding, you’ll probably find me café hopping, reading,
            or just enjoying a good cup of coffee (or Matcha, that's my
            favourite).
          </p>
        </div>
      </article>
    </AppLayout>
  );
};

export default about;
