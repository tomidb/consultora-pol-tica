import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { sections } from "../data.json";
import "./Hero.css";
import styled from "styled-components";

export function Hero() {
  const [name, setName] = useState(null);
  const [h1, setH2] = useState(null);
  const location = useLocation();

  useEffect(() => {
    changeHeroProps();
  }, [location.pathname]);

  const changeHeroProps = () => {
    var url = window.location.href;
    var urlSplits = url.split("/");
    var result = urlSplits[urlSplits.length - 1];

    if (result !== "home" && result !== "") {
      const section = sections.find((section) => section.name === result);

      setName(section.name);
      setH2(section.h1);
    }
  };

  const HeroDiv = styled.div`
    background-color: #012e38e6;
    color: #fff;
    height: 80vh;
    width: 100%;
    position: relative;

    &:before {
      content: "";
      background: url("/media/${name}.jpg") no-repeat center center/cover;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  `;

  return (
    <HeroDiv className="hero-container">
      <div className="content">
        <h1>{h1}</h1>
      </div>
    </HeroDiv>
  );
}
