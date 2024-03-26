import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-indigo-400 mb-10">
      <nav className="flex justify-items-center items-center  mx-auto justify-between">
          <ul className="flex font-bold text-white">
            <li className="hover:bg-indigo-600 py-3 px-5"><Link to="/">Home</Link></li>
            <li className="hover:bg-indigo-600 py-3 px-5"><Link to="/aboutus">About us</Link></li>
            <li className="hover:bg-indigo-600 py-3 px-5"><Link to="/news">News</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;
