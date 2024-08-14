import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <main className="font-custom p-4">
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}

export default App;
