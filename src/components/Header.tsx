import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex text-3xl font-bold tracking-tight text-orange-500"
        >
          <img
            src={logo}
            alt="QuickBite Logo"
            className="w-10 h-10 mr-2 rounded-full"
          />
          <span className="text-3xl font-bold tracking-tight text-orange-500">
            QuickBite
          </span>
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
