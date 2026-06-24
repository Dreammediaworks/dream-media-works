import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/digital-marketing.png";
import ser_img_2 from "@/assets/img/inner-service/service/creative.png";
import ser_img_3 from "@/assets/img/inner-service/service/photography.png";
import ser_img_4 from "@/assets/img/inner-service/service/web-tech.jpeg";
// import { RightArrow, ShapeTwo } from "../svg";
// import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "",
    title: "Digital Marketing & Growth",
    text: "We deliver data-driven digital marketing solutions including SEO, social media, and paid advertising to increase traffic, leads, and revenue.",
    lists: [
      {
        title: "Social Media Marketing",
        text: "We make your brand shine on social media. The right content, the right audience, the right results.",
      },
      {
        title: "Content Marketing",
        text: "We make your brand shine on social media. The right content, the right audience, the right results.",
      },
      {
        title: "Performance Marketing ",
        text: "We make your brand shine on social media. The right content, the right audience, the right results.",
      },
      {
        title: "Digital Marketing consultancy",
        text: "We make your brand shine on social media. The right content, the right audience, the right results.",
      },
      {
        title: "Search Engine Optimization ",
        text: "We make your brand shine on social media. The right content, the right audience, the right results.",
      },
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "",
    title: "Creative & Content",
    text: "We develop high-quality creative content and visual assets that strengthen brand identity, engage audiences, and support consistent marketing performance.",
    lists: [
      {
        title: "Content Production",
        text: "From concept to final cut, we bring your brand to life. High-quality content, produced with purpose.",
      },
      {
        title: "Creative Development",
        text: "Big ideas, beautifully executed. We build creatives that stop the scroll and stay in memory.",
      },
      {
        title: "Campaign Production",
        text: "From the first idea to the final launch, we handle it all. Campaigns that are built to make noise.",
      },
      {
        title: "Visual Designs (Graphic Designing)",
        text: "Design that speaks before you even say a word. We create visuals that are bold, beautiful, and unmistakably you.",
      },
      {
        title: "Branding & Identity",
        text: "Your brand is more than a logo — it’s a feeling. We build identities that are memorable, meaningful, and made to last.",
      },
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "",
    title: "Photography",
    text: "We offer professional photography services for products, events, and special occasions, delivering high-resolution visuals that effectively represent your brand.",
    lists: [
      {
        title: "Product Photography",
        text: "Your product deserves to be seen at its very best. We shoot images that are crisp, compelling, and built to sell.",
      },
      {
        title: "Wedding Photography & Videography",
        text: "Every moment of your special day, captured forever. Timeless photographs and films that tell your love story beautifully.",
      },
      {
        title: "Pre-Wedding Shoot",
        text: "Just the two of you, before the big day. We capture your love story in frames you’ll cherish forever.",
      },
      {
        title: "Event Photography & Videography",
        text: "Every event has moments worth remembering. We make sure none of them slip away.",
      },
      {
        title: "Toddlers Shoot",
        text: "Little moments, big memories. We capture your little one’s magic in frames you’ll treasure for a lifetime.",
      },
      {
        title: "Maternity Shoot",
        text: "The most beautiful chapter of your life, captured with love. Glowing, gorgeous, and entirely yours.",
      },
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "",
    title: "Web & Tech",
    text: "We design and develop responsive, SEO-optimized websites and landing pages focused on performance, user experience, and measurable business growth.",
    lists: [
      {
        title: "Website Development - Static, Dynamic, E-commerce",
        text: "Your website is your biggest digital asset — we build it right. Clean, fast, and crafted to convert, whatever your needs.",
      },
      {
        title: "Landing Page",
        text: "One page, one goal, one chance to convert. We build landing pages that turn visitors into action-takers.",
      },
      {
        title: "Webisite Maintainance",
        text: "Your website needs care — we make sure it always stays at its best. Fast, secure, and running smoothly, always.",
      },
      {
        title: "SEO & Optimisation",
        text: "A beautiful website means nothing if no one can find it. We optimise your site to rank higher, load faster, and perform better.",
      },
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>
                              {list.title}: <br />
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "rgba(255, 255, 255, 0.6)",
                                }}
                              >
                                {list.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
