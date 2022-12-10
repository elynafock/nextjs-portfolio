import React from "react";
import AppLayout from "../components/core/AppLayout";

const about = () => {
  return (
    <AppLayout>
      <article>
        <h3 className="text-3xl font-bold py-2 mt-8 mb-4">About Me</h3>
        <div className="gap-y-4 flex flex-col">
          <p>
            Hey there! My name is Elyna and I am a Year 3 student from UNIMAS
            major in Software Engineering. I’m passionate in creating beaufitul
            interfaces and implementing them with my technical skills.
          </p>
          <p>
            I’ve learned C, C++, Java, HTML, CSS, Javascript and PHP in my
            university journey. For side projects, I’ve used Python, Next.js,
            React.js, Vue.js, Nuxt.js, Node.js, Typescript, Tailwind, etc.
          </p>
          <p>
            I also had the privilege to learn Adobe Photoshop and Illustrator in
            my youth. Later, I also discovered my interest in digital
            illustration and UI/UX design that paved my way in designing.
          </p>
        </div>
      </article>
    </AppLayout>
  );
};

export default about;
