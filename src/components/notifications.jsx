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
          <div className="flex flex-col gap-2" key={i.name}>
            {i.read === false && !clickedNotifications.has(i.name) ? (
              <button
                className={`flex flex-1 cursor-pointer items-center gap-2 rounded-lg p-4 ${
                  click.includes(i.name) ? "" : "bg-veryLightGrayishBlue"
                }`}
                onClick={() => handleClick(i.name)}
              >
                <img className="w-1/12" src={i.profilePicture} alt="Profile" />
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      <a href="#" className="font-extrabold hover:text-blue">
                        {i.name}
                      </a>
                      <span className="font-medium text-grayishBlue">
                        {i.action}
                      </span>
                      <a
                        className="cursor-pointer font-extrabold hover:text-blue"
                        href="#"
                      >
                        {i.post}
                      </a>
                      <a
                        className="cursor-pointer font-extrabold hover:text-blue"
                        href="#"
                      >
                        {i.group}
                      </a>
                      {!click.includes(i.name) && (
                        <span className="text-red">•</span>
                      )}
                    </div>
                    <span className="text-left font-medium text-grayishBlue">
                      {i.time}
                    </span>
                  </div>
                  <img className="cursor-pointer" src={i.image} />
                </div>
              </button>
            ) : (
              <div className="flex flex-1 items-center gap-2 rounded-lg p-4">
                <img className="w-1/12" src={i.profilePicture} alt="Profile" />
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      <a href="#" className="font-extrabold hover:text-blue">
                        {i.name}
                      </a>
                      <span className="font-medium text-grayishBlue">
                        {i.action}
                      </span>
                      <a
                        className="cursor-pointer font-extrabold hover:text-blue"
                        href="#"
                      >
                        {i.post}
                      </a>
                      <a
                        className="cursor-pointer font-extrabold hover:text-blue"
                        href="#"
                      >
                        {i.group}
                      </a>
                      {!click.includes(i.name) && (
                        <span className="text-red">•</span>
                      )}
                    </div>
                    <span className="text-left font-medium text-grayishBlue">
                      {i.time}
                    </span>
                  </div>
                  <img
                    className="cursor-pointer object-contain"
                    src={i.image}
                  />
                </div>
              </div>
            )}
            {!i.comment === false && (
              <p className="rounded-lg p-4 hover:cursor-pointer hover:bg-veryLightGrayishBlue">
                {i.comment}
              </p>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Notifications;
