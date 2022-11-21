import NavBar from "../components/core/NavBar";
import Header from "../components/index/Header";
import Skills from "../components/index/Skills";

export default function Home() {
  return (
    <main className="font-light pt-12 grid grid-cols-3">
      <div className="max-w-3xl m-auto col-span-3 px-12 lg:col-span-2">
        <Header />
        <Skills />
      </div>
      <div className="hidden col-span-1 px-12 lg:block">
        <NavBar />
      </div>
    </main>
  );
}
