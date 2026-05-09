import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
// images
import location_1 from "../../../public/assets/img/chennai.jpeg";
import Link from "next/link";
import { contactData } from "@/data/contact-data";

// data
type LocationData = {
  id: number;
  img: StaticImageData;
  country: string;
  time?: string;
  location_title: string;
  address: string;
  phone: string;
  email: string;
};

const location_data: LocationData[] = [
  {
    id: 1,
    img: location_1,
    country: "Chennai, India",
    // time: "12:00 pm GMT+2",
    location_title: "Office Address",
    address: contactData.address,
    phone: contactData.phone,
    email: contactData.email,
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => {
            const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              item.address,
            )}`;
            const phoneHref = item.phone.replace(/[^\d+]/g, "");

            return (
              <div key={item.id} className="cn-contact-info-item">
                <div className="row align-items-stretch">
                  <div className="col-xl-7">
                    <div className="cn-contact-left">
                      <div className="cn-contact-info-thumb">
                        <Image
                          src={item.img}
                          alt={`${item.country} office`}
                          style={{ height: "auto" }}
                        />
                      </div>
                      <div className="cn-contact-left-info">
                        <span className="cn-contact-eyebrow">
                          Visit our Office
                        </span>
                        <h4 className="cn-contact-left-title">
                          {item.country}
                        </h4>
                        {item?.time && (
                          <span className="cn-contact-time">
                            <i className="fa-regular fa-clock"></i>
                            {item?.time}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="cn-contact-right-wrap">
                      <div className="cn-contact-right">
                        <div className="cn-contact-location">
                          <span className="cn-contact-location-title">
                            {item.location_title}
                          </span>
                          <Link
                            href={googleMapsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-regular fa-location-dot"></i>
                            <span>{item.address}</span>
                          </Link>
                        </div>
                        <div className="cn-contact-map">
                          <Link
                            href={googleMapsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google Maps
                            <i className="fa-regular fa-arrow-up-right"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="cn-contact-right-info">
                        <div className="cn-contact-detail">
                          <span>Phone</span>
                          <Link href={`tel:${phoneHref}`}>
                            <i className="fa-regular fa-phone"></i>
                            {item.phone}
                          </Link>
                        </div>
                        <div className="cn-contact-detail">
                          <span>Email</span>
                          <Link href={`mailto:${item.email}`}>
                            <i className="fa-regular fa-envelope"></i>
                            {item.email}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
