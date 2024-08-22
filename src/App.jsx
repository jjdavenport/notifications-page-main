import "./App.css";
import Header from "./components/header";
import Notifications from "./components/notifications";
import Footer from "./components/footer";
import data from "./components/assets/data.json";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

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

  const desktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {desktop ? (
        <div className="flex h-full min-h-screen flex-col justify-between bg-veryLightGrayishBlue">
          <div className="flex flex-1 items-center justify-center py-8">
            <main className="flex max-w-[800px] flex-col rounded-lg bg-white p-4 font-custom">
              <Header unreadCount={unreadCount} markAllAsRead={markAllAsRead} />
              <Notifications data={notifications} click={click} read={read} />
            </main>
          </div>
          <Footer className="font-custom" />
        </div>
      ) : (
        <div className="flex h-screen flex-col justify-between">
          <main className="flex flex-col justify-center bg-white font-custom">
            <Header unreadCount={unreadCount} markAllAsRead={markAllAsRead} />
            <Notifications data={notifications} click={click} read={read} />
          </main>
          <Footer className="font-custom" />
        </div>
      )}
    </>
  );
}

export default App;
