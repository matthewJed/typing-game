import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="px-2 py-1 m-2 bg-slate-600 text-white rounded-lg justify-normal w-60">
        <ul className="flex gap-5 justify-center">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
