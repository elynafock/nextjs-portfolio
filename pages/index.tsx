export default function Home() {
  return (
    <main className="font-light pt-12">
      <div className="max-w-3xl m-auto">
        <header className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <h1 className="text-5xl font-bold py-2">Elyna Fock</h1>
            <h2>Web Developer | UX Designer | Student</h2>
            <p className="py-4">
              Software Engineer student at{" "}
              <a href="https://www.unimas.my/" target={"_blank"}>
                UNIMAS
              </a>
              . Experience in Web Development, Figma, Photoshop and Illustrator.
            </p>
          </div>
          <div className="col-span-1 flex justify-center	items-center	">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="rounded-full	w-36"
            />
          </div>
        </header>
      </div>
    </main>
  );
}
