// React & UseState & UseEffect
import React, { useState, useEffect } from "react";
// Start CSS
import "./Start.css";

// Boxes
import { firstStartBox, secondStartBox } from "./StartBox";

// Slider Component
import SliderBox from "../Home/SliderBox";
import BoxDiv from "../../Components/BoxDiv/BoxDiv";

const Start = () => {
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

  const heading = "How to Start";
  const para =
    "We specialize in helping you build a team of expert developers.";

  return (
    <>
      <div className="startPage">
        <BoxDiv heading={heading} para={para} />

        <div className="secondStartCont">
          <div className="sizeBox">
            <h4>How to Get Started with Courtney</h4>
            <p>
              From full-time remote engineering teams to hourly contractors,
              work with remote devs as needed
            </p>

            <div className="box hide">
              {firstStartBox.map((e, i) => {
                return (
                  <div
                    className="inBox hidden"
                    data-animation-key={`secondStartCont${i}`}
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
            <SliderBox boxes={firstStartBox} />
          </div>
        </div>

        <div className="thirdStartCont">
          <div className="sizeBox">
            <h3>Why You Need To Hire Remote Developers</h3>

            <div className="box">
              {secondStartBox.map((e, i) => {
                return (
                  <h6
                    className="hidden"
                    data-animation-key={`thirdStartCont${i}`}
                    key={i}
                  >
                    {e.heading}
                  </h6>
                );
              })}
            </div>
          </div>
        </div>

        <div className="fourthStartCont">
          <div className="sizeBox">
            <p>1000+</p>
            <p>Developers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
