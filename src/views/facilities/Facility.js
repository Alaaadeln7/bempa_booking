import "./facility.scss";
import LazyLoadingImage from "../../components/LazyLoadingImage";
export default function Facility(props) {
  return (
    <article className="facility">
      <div className="image">
        <LazyLoadingImage image={props.image} />
        <div className="caption">
          <h1>{props.title}</h1>
        </div>
      </div>
    </article>
  );
}
