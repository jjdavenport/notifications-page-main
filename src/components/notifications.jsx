import { useState } from "react";

const Notifications = ({ data, click, read }) => {
  const [clickedNotifications, setClickedNotifications] = useState(new Set());

  const handleClick = (name) => {
    read(name);
    setClickedNotifications((prev) => new Set(prev).add(name));
  };

  return (
    <>
      <section className="flex flex-col gap-4">
        {data.map((i) => (
          <div className="flex flex-col" key={i.name}>
            {i.read === false && !clickedNotifications.has(i.name) ? (
              <button
                className={`flex flex-1 cursor-pointer ${
                  click.includes(i.name) ? "bg-white" : "bg-blue-900"
                }`}
                onClick={() => handleClick(i.name)}
              >
                <img src={i.profilePicture} alt="Profile" />
                <div className="flex gap-1">
                  <a>{i.name}</a>
                  <span>{i.action}</span>
                  <a>{i.post}</a>
                  <a>{i.group}</a>
                  <span>{i.time}</span>
                  {i.image && <img src={i.image} alt="Notification" />}
                  {!click.includes(i.name) && (
                    <span className="text-red-600">•</span>
                  )}
                </div>
              </button>
            ) : (
              <div className="flex flex-1 bg-gray-200">
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
