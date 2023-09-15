import Header from "../../components/Header";
import SectionGames from "../../components/SectionGames";
import SectionNews from "../../components/SectionNews";

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <main>
          <SectionNews />
          <SectionGames />
          <h1>SectionRegister</h1>
        </main>
        <h1>Footer</h1>
      </body>
    </>
  );
}
