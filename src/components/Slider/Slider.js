import React, { useState, useEffect } from "react";
import "./Slider.scss";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
const items = [
  {
    img: "http://preview.bit68.com/bit68Task/slider.png",
    id: "1",
  },
];

function Slider(args) {
  const [sliderItems, steSliderItems] = useState([
    {
      img: "http://preview.bit68.com/bit68Task/slider.png",
      id: "1",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === sliderItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? sliderItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = sliderItems.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img src={item.img} />
      </CarouselItem>
    );
  });

  useEffect(() => {
    console.log("slider");
    Axios.get("https://63189f2cf6b281877c71eab0.mockapi.io/slider").then(
      (data) => {
        console.log("slider data", data.data);
        steSliderItems(data.data);
      }
    );
  }, []);
  return (
    <Link to="/details">
      <Carousel
        className="sliderItems"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={sliderItems}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Link>
  );
}

export default Slider;
