import data from "./assets/data.json";
import { useState } from "react";

const Notifications = () => {
  const [click, setClick] = useState([]);

  const read = (name) => {
    setClick((prev) => [...prev, name]);
  };

  return (
    <>
      <section className="flex flex-col gap-4">
        {data.map((i) => (
          <div className="flex flex-col" key={i.name}>
            {i.read === "n" ? (
              <button
                className={`${click.includes(i.name) ? "bg-white" : "bg-blue-900"} flex flex-1`}
                onClick={() => read(i.name)}
              >
                <img src={i.profilePicture} alt="Profile" />
                <div className="flex gap-1">
                  <a>{i.name}</a>
                  <span>{i.action}</span>
                  <a>{i.post}</a>
                  <a>{i.group}</a>
                  <span>{i.time}</span>
                  {i.image && <img src={i.image} alt="Notification" />}
                </div>
              </button>
            ) : (
              <div className="flex-10 flex">
                <img src={i.profilePicture} alt="Profile" />
                <div className="flex gap-1">
                  <a>{i.name}</a>
                  <span>{i.action}</span>
                  <a>{i.post}</a>
                  <a>{i.group}</a>
                  <span>{i.time}</span>
                  {i.image && <img src={i.image} alt="Notification" />}
                </div>
              </div>
            )}
            <p>{i.comment}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Notifications;
