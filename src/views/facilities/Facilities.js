import "./facilities.scss";
import Facility from "./Facility";
import Landing from "../landing/Landing";
import image_landing_page from "../../assets/image_2.jpg";
import image_gym from "../../assets/gym.jpg";
import image_spa from "../../assets/spa.jpg";
import pool_side_bar from "../../assets/pool_side_bar.jpg";
import swimming_pool from "../../assets/swimming_pool.jpg";
import restaurant_image from "../../assets/restaurant.jpg";
import computer_image from "../../assets/computer.jpg";
import Footer from "../footer/Footer";
export default function Facilities() {
  return (
    <section className="facilities">
      <Landing image={image_landing_page} />
      <div className="facilities-header">
        <h1>facilities</h1>
        <p>
          Working together with clients is a collaborative process where
          individuals or businesses join forces to achieve common goals. This
          partnership involves effective communication, mutual understanding,
          and shared responsibilities. Here are some key aspects of working
          together with clients
        </p>
      </div>
      <div className="contain-facility">
        <Facility image={image_gym} title={"gym"} />
        <Facility image={pool_side_bar} title={"poolside bar"} />
        <Facility image={image_spa} title={"the spa"} />
        <Facility image={swimming_pool} title={"swimming pool"} />
        <Facility image={restaurant_image} title={"restaurant"} />
        <Facility image={computer_image} title={"public computer"} />
      </div>
      <Footer />
    </section>
  );
}
