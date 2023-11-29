import "./Slider.css";
import { imageSlide } from "../data.json";
import { useState, useEffect } from "react";

export function Slider() {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState == 4) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundPosition: "center",
    backgroundImage: `url(/media/${imageSlide[currentState].url})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  console.log(imageSlide);
  return (
    <>
      <div className="slider-container">
        <div className="countiner-style">
          <div style={bgImageStyle}></div>
          <div className="transparent-background"></div>
          <div className="description">
            <div className="description-info">
              <h1>{imageSlide[currentState].title}</h1>
              <p>{imageSlide[currentState].body}</p>
            </div>
            <div className="carousel-boullt">
              {imageSlide.map((imageSlide, currentState) => (
                <span
                  key={currentState}
                  onClick={() => goToNext(currentState)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
