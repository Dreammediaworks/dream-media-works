import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import port_1 from "@/assets/img/our-work/concept/concept3.png";
import port_2 from "@/assets/img/our-work/branding/branding2.png";
import port_3 from "@/assets/img/our-work/concept/concept4.png";
import port_4 from "@/assets/img//our-work/branding/branding4.png";
import port_5 from "@/assets/img//our-work/concept/concept7.png";
import port_6 from "@/assets/img//our-work/visual/visual2.png";
import port_7 from "@/assets/img//our-work/visual/visual4.png";

// images
const port_images = [port_1, port_2, port_3, port_4, port_5, port_6, port_7];

export default function LineImgSlider() {
  return (
    <div className="tp-line-text-wrap tp-line-text-wrap-2 pb-120">
      <div className="swiper tp-img-slide">
        <Marquee speed={150}>
          {port_images.map((imgSrc, index) => (
            <div
              key={index}
              className={`sv-port-thumb port-thumb-${index % 2 === 0 ? 1 : 2}`}
              style={{ marginRight: "40px" }}
            >
              <Image
                src={imgSrc}
                alt="port-img"
                style={{ maxHeight: "200px", width: "auto", minWidth: "200px" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
