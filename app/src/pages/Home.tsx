import coffeeIcon from "../assets/latte-art.png";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-arcade text-2xl">Welcome to my typing game!!</h1>
      <div className="flex gap-2 items-center">
        <p>
          Here you can check how fast you type. If you like this game buy me
          coffee
        </p>
        <button className="bg-slate-300 mt-2 rounded-md px-3 py-1 w-12 h-8 hover:bg-slate-100">
          <img src={coffeeIcon} alt="coffee icon" />
        </button>
      </div>
    </div>
  );
};
export default Home;
