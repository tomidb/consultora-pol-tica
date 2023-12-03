import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; //import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./Trabajos.css";
import { useState } from "react";

export function Trabajos({ trabajos }) {
  const [work, setWork] = useState(null);

  console.log(trabajos);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        loop={false}
        spaceBetween={0}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper-container"
      >
        {trabajos.map((trabajo) => (
          <SwiperSlide
            key={crypto.randomUUID()}
            className={"swiper-slide"}
            onClick={() => setWork(trabajo)}
          >
            <video
              src={`/media/${trabajo.url}`}
              alt={trabajo.tile}
              className="trabajo-preview"
              muted
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="popup-media" style={{ display: work ? "block" : "none" }}>
        <span onClick={() => setWork(null)}>&times;</span>
        {work ? (
          <video src={`/media/${work.url}`} muted autoPlay controls />
        ) : null}
      </div>
    </>
  );
}
