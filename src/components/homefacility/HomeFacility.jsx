import React from "react";
import "./HomeFacility.css";
import images from "../../constants/images";

const HomeFacility = () => {
  return (
    <>
      <div className="home-fac-sec">
        <div className="home-fac-flex container">
          <div className="home-fac-part1">
            <img
              src={images.leaf_side_img}
              alt=""
              className="home-fac-side-img"
            />
          </div>
          <div className="home-fac-part2">
            <div className="home-fac-part2-inner-flex">
              <div className="home-fac-roun-imgbox">
                <img
                  src={images.round_small_img_1}
                  className="facility-small-img"
                />
              </div>
              <div className="home-fac-list-flex">
                <p className="home-fac-list-head">Relax with face massage</p>
                <p className="home-fac-list-txt">
                  With extensive training and knowledge in the latest skincare
                  techniques and advancements, I stay updated on industry trends
                  to offer you the most effective and innovative treatments. I
                  am dedicated to continuous learning and improvement to ensure
                  that you receive the highest quality of care.
                </p>
              </div>
            </div>
            <div className="home-fac-part2-inner-flex">
              <div className="home-fac-roun-imgbox">
                <img
                  src={images.round_small_img_2}
                  className="facility-small-img"
                />
              </div>
              <div className="home-fac-list-flex">
                <p className="home-fac-list-head">Personalized Attention</p>
                <p className="home-fac-list-txt">
                  As the sole proprietor of the studio, I take the time to
                  understand your specific skincare concerns and goals. I
                  believe in a holistic approach to skincare, considering
                  factors such as lifestyle, diet, and stress levels to provide
                  personalized recommendations and treatments that address your
                  individual needs.
                </p>
              </div>
            </div>
            <div className="home-fac-part2-inner-flex">
              <div className="home-fac-roun-imgbox">
                <img
                  src={images.round_small_img_3}
                  className="facility-small-img"
                />
              </div>

              <div className="home-fac-list-flex">
                <p className="home-fac-list-head">
                  Relaxing and Tranquil Environment
                </p>
                <p className="home-fac-list-txt">
                  When you step into Ish Essence Studio, you'll experience a
                  serene and calming ambiance designed to promote relaxation and
                  rejuvenation. I believe in providing a peaceful escape where
                  you can unwind, de-stress, and enjoy a pampering facial
                  experience that revitalizes both your skin and your spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Facility_part2_main">
        <div
           className="Facility_part2_img_main">
          <img
            src={images.ScalpFacial}
            alt=""
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="Facility_part2_inner2">
          <h1 class="home-video-form-heading">Scalp Facial</h1>
          <div className="Facility_part2_inner2_content">
            <p className="home-fac-list-txt">
              Discover the soothing indulgence of head spa, where the art of
              scalp rejuvenation meets ultimate relaxation. Here’s what to
              expect during your session:
            </p>
            <p className="home-fac-list-txt">
              At the start, modern technology will assess your scalp, analyzing
              factors like dryness, oiliness, dandruff, irritation, sensitivity,
              or hair loss. This thorough observation guides the personalized
              treatment plan, though for any medical concerns, consulting a
              physician is recommended.
            </p>
            <p className="home-fac-list-txt">
              Next, choose from our range of Organethic Pure Care wellness hair
              rituals, renowned for their natural, top-quality ingredients. Your
              journey through our multi-step process includes:
            </p>
            <p className="home-fac-list-txt">
              - Gentle cleansing to rid your scalp of impurities,
              <br /> - Exfoliation to invigorate and stimulate circulation,
              <br /> - A tranquil massage to melt away tension, <br />- Soothing
              warm mist therapy to open pores and enhance absorption,
              <br /> - Targeted treatments to address specific scalp needs,
              <br /> - Nourishing conditioning to hydrate and fortify,
              <br /> - And the finale of our Waterfall Water Therapy, leaving
              you refreshed and renewed{" "}
            </p>
            <p className="home-fac-list-txt">
              More than just scalp care, our head spas are designed to elevate
              your overall well-being, combining time-honored techniques with
              advanced technology. This blend ensures not only effective results
              but also a serene escape from the stresses of everyday life.{" "}
            </p>
            <p className="home-fac-list-txt">
              Please remember, while our scalp analysis provides valuable
              insights, any medical concerns should be discussed with your
              healthcare provider. Experience the luxury and rejuvenation of
              head spa—a sanctuary where your scalp and soul find harmony{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFacility;
