import NavBar from "../components/core/NavBar";
import Header from "../components/index/Header";
import Skills from "../components/index/Skills";

export default function Home() {
  return (
    <main className="font-light grid grid-cols-3">
      <div className="max-w-3xl pt-12 m-auto col-span-3 px-12 lg:col-span-2">
        <Header />
        <Skills />
      </div>
      <div className="hidden pt-12 bg-gray-50 col-span-1 px-12 lg:block">
        <NavBar />
      </div>
    </main>
  );
}
