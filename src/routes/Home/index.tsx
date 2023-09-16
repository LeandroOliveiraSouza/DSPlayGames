import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionGames from "../../components/SectionGames";
import SectionNews from "../../components/SectionNews";
import SectionRegister from "../../components/SectionRegister";

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <main>
          <SectionNews />
          <SectionGames />
          <SectionRegister />
        </main>
        <Footer />
      </body>
    </>
  );
}
