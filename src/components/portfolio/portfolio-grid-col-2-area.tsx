import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsotop } from "@/hooks/use-isotop";
import { getOurWorkItems, ourWorkCategories } from "@/data/our-work-data";

type IProps = {
  categorySlug?: string;
};

export default function PortfolioGridColTwoArea({ categorySlug }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();
  const portfolio_data = getOurWorkItems(categorySlug);

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className="container container-1530">
        {!categorySlug && (
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-40">
                <button data-filter="*" className="active">
                  <span>SHOW ALL</span>
                </button>
                {ourWorkCategories.map((category) => (
                  <button
                    key={category.slug}
                    data-filter={`.${category.filterClass}`}
                  >
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div
                className="
                // tp-project-5-2-thumb
                 anim-zoomin-wrap mb-30 not-hide-cursor p-relative
                 "
                // data-cursor="View<br>Demo"
              >
                <Link
                  href={`/our-work/${item.slug}`}
                  className="cursor-hide"
                  style={{
                    display: "block",
                    position: "relative",
                    aspectRatio: "4 / 5",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    className="portfolio-grid-img anim-zoomin"
                    src={item.img}
                    alt="port-img"
                    fill
                    sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    {/* <span className="tp-project-5-2-meta">{item.year}</span> */}
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/our-work"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
