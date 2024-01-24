import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./header.scss";
import { HiMiniBars3 } from "react-icons/hi2";
export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/facilities"}>Facilities</Link>
          </li>
          <li>
            <Link to={"/rooms"}>Rooms</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact-us</Link>
          </li>
        </ul>
      </nav>
      <div
        className="bar"
        onClick={() => {
          document.querySelector("nav").classList.toggle("show");
        }}
      >
        <HiMiniBars3 />
      </div>
    </header>
  );
}
