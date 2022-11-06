import Header from "../components/index/Header";
import Skills from "../components/index/Skills";

export default function Home() {
  return (
    <main className="font-light pt-12">
      <div className="max-w-3xl m-auto">
        <Header />
        <Skills />
      </div>
    </main>
  );
}
