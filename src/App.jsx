import "./App.css";
import Header from "./components/header";
import Notifications from "./components/notifications";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <main className="font-custom p-4">
        <Header />
        <Notifications />
        <Footer />
      </main>
    </>
  );
}

export default App;
