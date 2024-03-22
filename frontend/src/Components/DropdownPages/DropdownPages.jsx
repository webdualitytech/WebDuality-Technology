// React & UseState & UseEffect
import React, { useState, useEffect } from "react";
import "./DropdownPages.css";

/* ------------- React Router Dom ------------- */
// NavLink
import { NavLink } from "react-router-dom";

// Hire Component
import Hire from "../Hire/Hire";

// React Slick Slider
import Slider from "react-slick";
// React Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import thirdBackImg from "./Assets/thirdBackImg.jpg";

const DropdownPages = (props) => {
  const {
    firstContainer,
    secondContainer,
    thirdContainer,
    fourthContainer,
    fifthContainer,
    hire,
  } = props;

  const [animationsShown, setAnimationsShown] = useState({});
  const [scrolledDown, setScrolledDown] = useState(false);

  // Handle Intersection Func
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("show")) {
        entry.target.classList.add("show");

        // Update the state to mark this animation as shown
        setAnimationsShown((prev) => ({
          ...prev,
          [entry.target.dataset.animationKey]: true,
        }));
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      // Check if the user has scrolled down
      if (scrollPosition > 0) {
        setScrolledDown(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolledDown) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
      });

      const targetRefs = document.querySelectorAll(".hidden");

      targetRefs.forEach((targetRef) => {
        const animationKey = targetRef.dataset.animationKey;

        // Check if the animation for this box has already been shown
        if (!animationsShown[animationKey]) {
          observer.observe(targetRef);
        } else {
          // If the animation has already been shown, add the 'show' class immediately
          targetRef.classList.add("show");
        }
      });

      return () => {
        targetRefs.forEach((targetRef) => {
          observer.unobserve(targetRef);
        });
      };
    }
  }, [scrolledDown, animationsShown]); // Add animationsShown to the dependency array

  // Slider Responsive
  const settings = {
    dots: true,
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Hire Dialog UseState
  const [openHireDialog, setOpenHireDialog] = useState(false);

  // Open Hire Dialog Func
  const handleHireOpenDialog = () => {
    setOpenHireDialog(true);
  };

  // Close Hire Dialog Func
  const handleHireCloseDialog = () => {
    setOpenHireDialog(false);
  };

  const [btnColor, setBtnColor] = useState({
    btn1: true,
    btn2: false,
  });

  return (
    <>
      <div className="serviceDropContainer">
        <div
          className="firstServiceDropCont"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.5)),
            url("${firstContainer.backimg}") no-repeat`,
            backgroundSize: "100% 100%",
          }}
        >
          <h2>{firstContainer.heading}</h2>
          <p>{firstContainer.para}</p>

          <div className="buttonBox">
            <NavLink to="/contact">
              {" "}
              <button
                onMouseOver={() => {
                  setBtnColor({
                    btn1: true,
                    btn2: false,
                  });
                }}
                style={{
                  color: btnColor.btn1
                    ? "var(--main-textSecond-color)"
                    : "var(--main-text-color)",
                  background: btnColor.btn1
                    ? "var(--main-backGradient-color)"
                    : "var(--main-background-color)",
                }}
              >
                Contact Us
              </button>
            </NavLink>

            <button
              onClick={handleHireOpenDialog}
              onMouseOver={() => {
                setBtnColor({
                  btn1: false,
                  btn2: true,
                });
              }}
              style={{
                color: btnColor.btn2
                  ? "var(--main-textSecond-color)"
                  : "var(--main-text-color)",
                background: btnColor.btn2
                  ? "var(--main-backGradient-color)"
                  : "var(--main-background-color)",
              }}
            >
              Apply Now
            </button>
          </div>
        </div>

        <div className="secondServiceDropCont">
          <div
            className="leftCount hidden"
            data-animation-key={`secondServiceDropContLeftCont 1`}
          >
            <h2 dangerouslySetInnerHTML={{ __html: secondContainer.heading }} />
            <p>{secondContainer.para1}</p>
            <p>{secondContainer.para2}</p>
          </div>
          <div
            className="rightCount hidden"
            data-animation-key={`secondServiceDropContLeftCont 2`}
          >
            <img src={secondContainer.img} alt="" draggable="false" />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            background: `url("${thirdBackImg}") no-repeat`,
            backgroundSize: "100% 100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <div className="thirdServiceDropCont">
            <h2 dangerouslySetInnerHTML={{ __html: thirdContainer.heading }} />
            <p>{thirdContainer.para}</p>
            <div className="cardBox">
              {thirdContainer.webDevServices.map((e, i) => {
                return (
                  <div
                    className="cards hidden"
                    data-animation-key={`thirdServiceDropCont ${i}`}
                    key={i}
                  >
                    <img src={e.img} alt="" />
                    <div className="down">
                      <h4>{e.name}</h4>
                    </div>
                    <div className="text">
                      <h4>{e.name}</h4>
                      <p>{e.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="fourthServiceDropCont">
          <h2 dangerouslySetInnerHTML={{ __html: fourthContainer.heading }} />
          <p>{fourthContainer.para}</p>
          <div className="box">
            <Slider {...settings}>
              {fourthContainer.webDevAgency.map((e, i) => (
                <div
                  className="agencyBox hidden"
                  data-animation-key={`fourthServiceDropCont${i}`}
                  key={i}
                >
                  <div className="innerAgencyBox">
                    <img src={e.img} alt="" draggable="false" />
                    <h6>{e.name}</h6>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="fifthServiceDropCont">
          <h2 dangerouslySetInnerHTML={{ __html: fifthContainer.heading }} />
          <p>{fifthContainer.para}</p>
          <div className="box">
            {fifthContainer.webDevTechStack.map((e, i) => (
              <div
                key={i}
                className="inBox hidden"
                data-animation-key={`fifthServiceDropCont ${i}`}
                style={{
                  cursor: e.link ? "pointer" : "default",
                }}
              >
                {e.link ? (
                  <NavLink
                    to={e.link}
                    style={{
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <img src={e.img} alt="" draggable="false" />
                    <h6>{e.heading}</h6>
                  </NavLink>
                ) : (
                  <>
                    <img src={e.img} alt="" draggable="false" />
                    <h6>{e.heading}</h6>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Dialog Box */}
      <Hire
        openHireDialog={openHireDialog}
        handleHireCloseDialog={handleHireCloseDialog}
        heading={hire}
      />
    </>
  );
};

export default DropdownPages;
