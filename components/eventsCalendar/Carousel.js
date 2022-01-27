import { Children } from "react";
import Slider from "react-slick";
import styles from "../../styles/EventsCalendar.module.css";
import { Arrow } from "../svgs";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
};


const Carousel = ({children}) => {
  const settings = {
    dots: true,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    initialSlide: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
  };

  return <div className={styles["carousel-container"]}>
    <Slider {...settings} >
      {children}
    </Slider>
  </div>;
};

export default Carousel;
