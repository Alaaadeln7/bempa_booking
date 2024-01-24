import "./landing.scss";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import Header from "../header/Header";
import LazyLoadingImage from "../../components/LazyLoadingImage";
export default function Landing(props) {
  return (
    <div className="landing">
      <Header />
      <div className="background">
        <LazyLoadingImage image={props.image} />
      </div>
      <div className="text">
        <h1>
          <p className="welcome">welcome to</p> bempa <span>hotels</span>
        </h1>
        <p>
          Book your stay and enjoy Luxury redefined at the most affordable rates
        </p>
      </div>
      <button className="btn btn-booking">
        <FaCalendarCheck />
        <p>Booking now</p>
      </button>
      <div className="scroll-bottom">
        <p>scroll</p>
        <button
          onClick={() => {
            window.scrollTo({
              top: 800,
              behavior: "smooth",
            });
          }}
        >
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
}
