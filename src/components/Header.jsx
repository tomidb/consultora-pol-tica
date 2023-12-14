import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Slider } from "./Slider";
import "./Header.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Header() {
  const [home, setHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    readUrl();
  }, [location.pathname]);

  const readUrl = () => {
    var url = window.location.href;
    var urlSplits = url.split("/");
    var result = urlSplits[urlSplits.length - 1];
    console.log(result);

    if (result == "home" || result == "") {
      setHome(true);
    } else {
      setHome(false);
    }
  };

  return (
    <header className="header-real">
      <Navbar />
      {home ? <Slider /> : <Hero />}
    </header>
  );
}
