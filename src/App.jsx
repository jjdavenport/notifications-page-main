import "./App.css";
import Header from "./components/header";
import Notifications from "./components/notifications";
import Footer from "./components/footer";
import data from "./components/assets/data.json";
import { useState } from "react";

function App() {
  const [click, setClick] = useState([]);

  const read = (name) => {
    setClick((prev) => [...prev, name]);
  };

  const unreadCount = data.filter(
    (i) => !i.read && !click.includes(i.name),
  ).length;

  const markAllAsRead = () => {
    setClick(data.map((i) => i.name));
  };

  return (
    <>
      <main className="flex flex-col gap-2 p-4 font-custom">
        <Header unreadCount={unreadCount} markAllAsRead={markAllAsRead} />
        <Notifications data={data} click={click} read={read} />
        <Footer />
      </main>
    </>
  );
}

export default App;
