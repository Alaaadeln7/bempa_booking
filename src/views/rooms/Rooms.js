import Landing from "../landing/Landing";
import image_landing_page from "../../assets/image_3.jpg";
import "./rooms.scss";
import rooms__data from "./roomsData";
import Room from "./Room";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Footer from "../footer/Footer";
export default function Rooms() {
  console.log(rooms__data);
  return (
    <section className="rooms">
      <Landing image={image_landing_page} />
      <div className="rooms__header">
        <h1>rooms and rates</h1>
        <p>
          Working together with clients is a collaborative process where
          individuals or businesses join forces to achieve common goals. This
          partnership involves effective communication, mutual understanding,
          and shared responsibilities. Here are some key aspects of working
          together with clients
        </p>
      </div>
      <div className="contain__rooms">
        {rooms__data?.map((item) => (
          <Room title={item.title} images={item.images} price={item.price} />
        ))}
      </div>
      <div className="testimonials">
        <div className="container">
          <h1>testimonials</h1>
          <p>
            "
            {
              "The bedroom is a well-appointed and comfortable space, with a serene and inviting atmosphere. The walls are painted in a soothing color, such as a soft shade of blue, green, or beige, creating a tranquil ambiance. Natural light streams in through large windows during the day, and in the evenings"
            }
            "
          </p>
          <div className="btns">
            <button className="btn">
              <IoIosArrowBack />
            </button>
            <button className="btn">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
