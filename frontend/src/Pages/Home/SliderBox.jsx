// React & UseState & UseEffect
import React, { useState, useEffect } from "react";

const SliderBox = ({ boxes }) => {
  // Current Slide UseState
  const [currentSlide, setCurrentSlide] = useState(0);
  // Go to Slide Func
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Slide Change UseEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % boxes.length);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [boxes.length]);

  return (
    <>
      <div className="homeSecondCont homeFourthCont secondStartCont c">
        <div className="slider-container">
          {/* Slide Box */}
          <div className="slides box">
            {boxes.map((e, i) => {
              return (
                <div
                  className={`slide inBox ${
                    i === currentSlide ? "active" : ""
                  }`}
                  key={i}
                >
                  <img src={e.img} alt="" draggable="false" />
                  <span>
                    <p>{e.heading}</p>
                    <p>{e.para}</p>
                  </span>
                </div>
              );
            })}
          </div>
          {/* Indiccators */}
          <div className="indicators">
            {boxes.map((_, index) => (
              <span
                key={index}
                className={index === currentSlide ? "active" : ""}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderBox;
