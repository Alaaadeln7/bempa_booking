import Landing from "../landing/Landing";
import landing_page_image from "../../assets/image_1.jpg";
import "./home.scss";
import LazyLoadingImage from "../../components/LazyLoadingImage";
import feature_one from "../../assets/image_one.jpg";
import feature_two from "../../assets/image_two.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Footer from "../footer/Footer";
export default function Home() {
  return (
    <section className="home">
      <Landing image={landing_page_image} />
      <div className="features">
        <div className="container">
          <h2>All our room types are including complementary breakfast</h2>
          <div className="description">
            <div className="image">
              <LazyLoadingImage image={feature_one} />
            </div>
            <div className="text-feature">
              <h1>Luxury redefined</h1>
              <p>
                bedroom is a private space in a home specifically designed for
                sleeping, relaxation, and personal activities. It is typically a
                place where individuals or couples retreat to for rest and
                rejuvenation. Here is a description of a typical bedroom
              </p>
              <button className="btn">explore</button>
            </div>
          </div>
          <div className="description">
            <div className="text-feature">
              <h1>Luxury redefined</h1>
              <p>
                bedroom is a private space in a home specifically designed for
                sleeping, relaxation, and personal activities. It is typically a
                place where individuals or couples retreat to for rest and
                rejuvenation. Here is a description of a typical bedroom
              </p>
              <button className="btn">explore</button>
            </div>
            <div className="image">
              <LazyLoadingImage image={feature_two} />
            </div>
          </div>
        </div>
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
