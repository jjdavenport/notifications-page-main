import data from "./assets/data.json";

const Main = () => {
  return (
    <>
      {data.map((i) => (
        <section key={i.name} className="flex flex-col gap-4">
          <div className="flex bg-blue-400">
            <img src={i.profilePicture} />
            <div className="flex gap-1">
              <span>{i.name}</span>
              <span>{i.action}</span>
              <span>{i.post}</span>
              <span>{i.group}</span>
              <span>{i.time}</span>
              <img src={i.image} />
            </div>
          </div>
          <p>{i.comment}</p>
        </section>
      ))}
    </>
  );
};

export default Main;
