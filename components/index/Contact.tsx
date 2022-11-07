import React from "react";

const Contact = () => {
  const contacts = [
    {
      name: "Instagram",
      imageSrc: "/instagram-icon.svg",
      href: "https://www.instagram.com/itselyna/",
    },
    {
      name: "Email",
      imageSrc: "/email-icon.svg",
      href: "mailto:elinayen2000@gmail.com",
    },
    {
      name: "Linkedin",
      imageSrc: "/linkedin-icon.svg",
      href: "https://www.linkedin.com/in/xue-yen-fock-716691245/",
    },
    {
      name: "Github",
      imageSrc: "/github-icon.svg",
      href: "https://github.com/elynafock",
    },
  ];

  return (
    <div className="grid grid-cols-2 text-sm sm:grid-cols-4 gap-y-4">
      {contacts.map((contact) => (
        <a
          href={contact.href}
          target={"_blank"}
          key={contact.name}
          className="flex gap-x-2 hover:no-underline transition hover:text-blue-400"
        >
          <img
            src={contact.imageSrc}
            alt={`${contact.name} Icon`}
            width={20}
            height={20}
          />
          <div>{contact.name}</div>
        </a>
      ))}
    </div>
  );
};

export default Contact;
