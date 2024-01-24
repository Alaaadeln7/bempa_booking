import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./room.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LazyLoadingImage from "../../components/LazyLoadingImage";
export default function Room(props) {
  return (
    <article className="room" key={props.id}>
      <div className="contain__images">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {props?.images?.map((item) => (
            <SwiperSlide>
              <LazyLoadingImage image={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text__room">
        <h1>{props.title}</h1>
        <a href="#/">
          room details
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </a>
        <button className="btn">{props.price}pre/night</button>
      </div>
    </article>
  );
}
