import "./App.css";
import Header from "./components/header";
import Notifications from "./components/notifications";
import Footer from "./components/footer";
import data from "./components/assets/data.json";
import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState(data);
  const [click, setClick] = useState([]);

  const read = (name) => {
    setClick((prev) => [...prev, name]);
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
    setClick(data.map((item) => item.name));
  };

  const unreadCount = notifications.filter(
    (item) => !item.read && !click.includes(item.name),
  ).length;

  return (
    <>
      <main className="flex flex-col gap-4 p-4 font-custom">
        <Header unreadCount={unreadCount} markAllAsRead={markAllAsRead} />
        <Notifications data={notifications} click={click} read={read} />
        <Footer />
      </main>
    </>
  );
}

export default App;
