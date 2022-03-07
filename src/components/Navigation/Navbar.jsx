import { Link } from "react-router-dom";
import { navdata } from "./data";

export default function Navbar() {
  return (
    <header className="z-50 hidden w-full bg-[#171717] text-zinc-100 lg:block">
      <div className="flex items-center justify-center py-3">
        <nav className="flex items-center justify-center lg:gap-12">
          <ul className="flex items-center  justify-center gap-10">
            {navdata.map((link, index) => (
              <Link to={link.href} key={index}>
                <li className="linear cursor-pointer whitespace-nowrap text-xs font-medium tracking-wider transition-all duration-300 hover:text-[#00959F]">
                  {link.link}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
