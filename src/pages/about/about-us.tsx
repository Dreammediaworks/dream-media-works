"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import FooterOne from "@/layouts/footers/footer-one";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import TeamOne from "@/components/team/team-one";
import FunFactOne from "@/components/fun-fact/fun-fact-one";
import BrandFive from "@/components/brand/brand-five";
import AwardOne from "@/components/award/award-one";
// animation
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";

const AboutStorySection = () => {
  return (
    <section id="about-info" className="dmw-about-story-section">
      <div className="container container-1480 dmw-about-story-inner">
        <div className="dmw-about-story-block dmw-about-story-start">
          <h2 className="tp-char-animation">
            We started with a <span>dream</span>.<em>(Yes, literally.)</em>
          </h2>
        </div>

        <div className="dmw-about-story-block dmw-about-story-copy tp_fade_bottom">
          <p>
            Dream MeDia WorKs didn’t start in a boardroom. It started with two
            people, a big idea, and the stubborn belief that great marketing
            should do two things at once, look stunning and actually work.
          </p>
          <p>
            Over the last few years, from the heart of Chennai, we’ve grown from
            a little setup into a full-service digital marketing agency that
            works with brands of all shapes and sizes. Startups finding their
            voice. Established businesses levelling up. D2C brands trying to cut
            through the noise. We’ve worked with them all and we’ve loved every
            bit of it.
          </p>
        </div>

        <div className="dmw-about-story-block dmw-about-story-right-title">
          <h3 className="tp-char-animation">
            What makes us, <span className="dmw-text-orange">us?</span>
          </h3>
        </div>

        <div className="dmw-about-story-block dmw-about-story-center tp_fade_bottom">
          <p>We’re not your typical agency.</p>
        </div>

        <div className="dmw-about-story-block dmw-about-story-copy tp_fade_bottom">
          <p>
            We don’t do cookie-cutter campaigns or copy-paste strategies. We
            obsess over your brand like it’s our own — because to us, it kind of
            is. Every reel, every post, every website, every ad — we pour real
            thought into it.
          </p>
          <p>
            We believe creativity without strategy is just art. And strategy
            without creativity is just a spreadsheet. At Dream MediaWorks, we do
            both, together.
          </p>
        </div>

        <div className="dmw-about-story-block dmw-about-story-people">
          <h3 className="tp-char-animation">
            <span className="dmw-text-orange">The</span> people behind the work
          </h3>
        </div>

        <div className="dmw-about-story-block dmw-about-story-copy dmw-about-story-people-copy tp_fade_bottom">
          <p>
            Dream MediaWorks is built by creators who genuinely care — about
            design, about results, and about the brands they work with. Based in
            Chennai, we’re a tight-knit team with big-agency thinking and the
            personal attention of a boutique studio.
          </p>
        </div>

        <div className="dmw-about-story-block dmw-about-story-center dmw-about-story-partner tp_fade_bottom">
          <p>
            When you work with us, you’re not a ticket in a queue. You’re a
            partner.
          </p>
        </div>

        <div className="dmw-about-story-row">
          <div className="dmw-about-story-block dmw-about-story-left-note tp_fade_bottom">
            <p>
              We’re still dreaming — bigger, bolder, and with a lot more colour.
            </p>
          </div>
          <div className="dmw-about-story-block dmw-about-story-heading-note">
            <h3 className="tp-char-animation">
              Where we’re hea<span className="dmw-text-orange">ded</span>
            </h3>
          </div>
          <div className="dmw-about-story-block dmw-about-story-right-note tp_fade_bottom">
            <p>
              If you’re a brand that refuses to be boring, you’re in the right
              place.
            </p>
          </div>
        </div>

        <div className="dmw-about-story-block dmw-about-story-closing tp_fade_bottom dmw-text-orange">
          <p className="dmw-text-orange">
            Building brands that don’t wait to be discovered
            <br />
            we make it impossible to be ignored.
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* about hero */}
            <AboutUsHero />
            {/* about hero */}

            {/* about story */}
            <AboutStorySection />
            {/* about story */}

            {/* about area */}
            {/* <AboutUsArea /> */}
            {/* about area */}

            {/* team area */}
            {/* <TeamOne spacing="" /> */}
            {/* team area */}

            {/* fun fact area */}
            {/* <FunFactOne /> */}
            {/* fun fact area */}

            {/* brand area */}
            {/* <BrandFive /> */}
            {/* brand area */}

            {/* award area */}
            {/* <AwardOne cls="ab-award-style pt-120 pb-120" abStyle={true} /> */}
            {/* award area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsMain;
