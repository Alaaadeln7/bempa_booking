import "./contact.scss";
import Landing from "../landing/Landing";
import image_landing_page from "../../assets/image_4.jpg";
import contact__image from "../../assets/contact.jpg";
import Footer from "../footer/Footer";
export default function Contact() {
  return (
    <section className="contact">
      <Landing image={image_landing_page} />
      <div className="contact-header">
        <h1>we are here for you </h1>
        <p>
          Working together with clients is a collaborative process where
          individuals or businesses join forces to achieve common goals. This
          partnership involves effective communication, mutual understanding,
          and shared responsibilities. Here are some key aspects of working
          together with clients
        </p>
      </div>
      <div className="contain-form">
        <div className="container">
          <div className="image">
            <img src={contact__image} alt="contact image" />
            <div>
              <p>street: egypt , cairo</p>
              <p>+123 456 789</p>
              <p>bempa_hotels@gmail.com</p>
            </div>
          </div>
          <div className="form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />

              <label htmlFor="message">message</label>
              <textarea id="message"></textarea>

              <button className="btn">submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
