// React & UseState & UseEffect
import React, { useState, useEffect } from "react";
// Home CSS
import "./Home.css";

import { NavLink } from "react-router-dom";

// Next Arrow
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Previous Arrow
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Team Component
import Team from "../../Components/Team/Team";

// React Type Animation
import { TypeAnimation } from "react-type-animation";

// All Boxes
import {
  firstHomeBox,
  secondHomeBox,
  thirdHomeBox,
  fourthHomeBox,
  fifthHomeBox,
  sixthHomeBox,
} from "./HomeBox";

// Slider Box Component
import SliderBox from "./SliderBox";

// React Slick Slider
import Slider from "react-slick";
// React Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Slider Left Arrow
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <ArrowBackIosIcon
    sx={{
      color: "var(--main-text-color)",
    }}
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  />
);

// React Slider Right Arrow
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <ArrowForwardIosIcon
    sx={{
      color: "var(--main-text-color)",
    }}
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  />
);

// Slider Responsive
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
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

const Home = () => {
  // Build Team Dialog UseState
  const [openBuildTeamDialog, setOpenBuildTeamDialog] = useState(false);

  // Open Build Team Dialog Func
  const handleBuildTeamOpenDialog = () => {
    setOpenBuildTeamDialog(true);
  };

  // Close Build Team Dialog Func
  const handleBuildTeamCloseDialog = () => {
    setOpenBuildTeamDialog(false);
  };

  // Tech Box List
  const techList = fifthHomeBox.map((e, i) => (
    <div className="techBox" key={i}>
      <img src={e.img} alt="" />
    </div>
  ));

  // Client Box List
  const clientList = sixthHomeBox.map((e, i) => (
    <div className="techBox" key={i}>
      <img src={e.img} alt="" />
    </div>
  ));

  // Current Slide UseState
  const [currentSlideState, setCurrentSlideState] = useState(0);
  // Go to Slide Func
  const goToSlide = (index) => {
    setCurrentSlideState(index);
  };

  // Slide Change UseEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideState((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const [animationsShown, setAnimationsShown] = useState({});

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
  }, [animationsShown]); // Add animationsShown to the dependency array

  return (
    <>
      <div className="homeContainer">
        <div className="homeFirstCont">
          <div className="sizeBox">
            <div className="box">
              {/* Type Animation */}
              <h2>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Building dev team, Quickly and Affordably",
                    1000,
                    "Growing a Development Team, Swiftly and Economically",
                    1000,
                    "Establishing a Dev Team, Speedily and Budget-Friendly",
                    1000,
                    "Constructing a Tech Team, Rapidly and Cost-Effectively",
                    1000,
                    "Forming a Development Squad, Quickly and Within Budget",
                    1000,
                    "Assembling a Coding Team, Fast and Affordably",
                    1000,
                  ]}
                  wrapper="span"
                  speed={250}
                  repeat={Infinity}
                />
              </h2>
              <p>
                We specialize in helping you build a team of expert developers,
                testers, and leaders. We are setup to deliver long term
                solutions, or scale to different needs quickly.
              </p>
              <button>
                <NavLink
                  to="/contact"
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                </NavLink>
              </button>
              {/* <button onClick={handleBuildTeamOpenDialog}>
              Build a team
              <ArrowForwardOutlinedIcon
                sx={{
                  width: 18,
                  height: 15.5,
                  ml: 0.5,
                }}
              />
            </button> */}
            </div>
          </div>
        </div>

        <div className="homeSecondCont">
          <div className="sizeBox">
            <h5>Solutions</h5>
            <h2>Software Solutions, with expert software engineering teams</h2>
            <p>
              We specialize in helping you build a team of expert developers,
              testers, and leaders.
            </p>
            <div className="box hide">
              {firstHomeBox.map((e, i) => {
                return (
                  <div
                    className="inBox hidden"
                    data-animation-key={`homeSecondCont${i}`}
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
            {/* Responsive */}
            <SliderBox boxes={firstHomeBox} />
          </div>
        </div>

        <div className="homeThirdCont">
          <h6>How to Start</h6>
          <h2>Easy Process</h2>
          <p>
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
          <div className="box">
            {secondHomeBox.map((e, i) => {
              return (
                <div
                  className="inBox hidden"
                  data-animation-key={`homeThirdCont${i}`}
                  key={i}
                >
                  <img src={e.img} alt="" draggable="false" />
                  <p>
                    <strong>{e.heading}</strong>
                    {e.para}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="homeFourthCont">
          <div className="sizeBox">
            <h5>Expertise</h5>
            <h2>Hire Permanent and Remote Developers</h2>
            <p>
              From full-time remote engineering teams to hourly contractors,
              work with remote devs as needed
            </p>

            <div className="box hide">
              {thirdHomeBox.map((e, i) => {
                return (
                  <div
                    className="inBox hidden"
                    data-animation-key={`homeFourthCont${i}`}
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
            {/* Responsive */}
            <SliderBox boxes={thirdHomeBox} />
          </div>
        </div>

        <div className="homeFifthCont">
          <div className="sizeBox">
            <h5>Specialized</h5>
            <h2>Specialized Staff We Provide</h2>
            <div className="box hide">
              {fourthHomeBox.map((e, i) => {
                return (
                  <div
                    className="inBox hidden"
                    data-animation-key={`homeFifthCont${i}`}
                    key={i}
                  >
                    <img src={e.img} alt="" draggable="false" />
                    <p>{e.heading}</p>
                  </div>
                );
              })}
            </div>
            {/* Responsive */}
            <div className="slider-container">
              <div className="slides box">
                {[0, 1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className={`slide ${
                      index === currentSlideState ? "active" : ""
                    }`}
                  >
                    {fourthHomeBox
                      .slice(
                        (index * fourthHomeBox.length) / 4,
                        ((index + 1) * fourthHomeBox.length) / 4
                      )
                      .map((e, i) => (
                        <div key={i} className="inBox">
                          <img src={e.img} alt="" draggable="false" />
                          <p>{e.heading}</p>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
              <div className="indicators">
                {[0, 1, 2, 3].map((_, index) => (
                  <span
                    key={index}
                    className={index === currentSlideState ? "active" : ""}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="homeSixthCont">
          <div className="sizeBox">
            <h5>Specialized</h5>
            <h2>Technologies</h2>
            {/* React Slick Slider */}
            <div className="box">
              <Slider {...settings}>{techList}</Slider>
            </div>
          </div>
        </div>

        <div className="homeSixthCont">
          <div className="sizeBox">
            <h5>Clients</h5>
            <h2>Amazing clients who trust us</h2>
            {/* React Slick Slider */}
            <div className="box">
              <Slider {...settings}>{clientList}</Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Team Dialog */}
      <Team
        openBuildTeamDialog={openBuildTeamDialog}
        handleBuildTeamCloseDialog={handleBuildTeamCloseDialog}
      />
    </>
  );
};

export default Home;
