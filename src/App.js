import "./App.css";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function App() {
  return (
    <div className="App">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/05da6bc6-a6e4-4e27-81ab-d3572a9b2433.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/a75a39bf-54c8-466b-b7a8-f04b8a4deeb0.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/5df944d0-800c-464a-a576-4fd16c37d076.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
