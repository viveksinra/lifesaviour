"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="it-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                    >
                      Secure IT Solutions for a More Secure Environment!
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    >
                      We work hand-in-hand with industry-leading brands to help
                      redefine the possibilities and potential of digital
                      engagements.
                    </p>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      <Link href="/contact" className="default-btn mr-3">
                        Get Started <span></span>
                      </Link>

                      <div
                        className="video-btn"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="flaticon-play-button"></i> Play Video
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <Swiper
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                      delay: 6500,
                      disableOnInteraction: true,
                      pauseOnMouseEnter: true,
                    }}
                    className="it-banner-image"
                  >
                    <SwiperSlide>
                      <div className="animate-image">
                        <Image
                          src="/images/it-banner/animate-img.jpg"
                          alt="image"
                          width={650}
                          height={650}
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="animate-image">
                        <Image
                          src="/images/it-banner/animate-img2.jpg"
                          alt="image"
                          width={650}
                          height={650}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={100}
            height={93}
          />
        </div>
        <div className="shape-img8">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={74}
            height={64}
          />
        </div>
        <div className="shape-img9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={43}
            height={46}
          />
        </div>
        <div className="shape-img10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
        <div className="shape-img11">
          <Image
            src="/images/shape/shape11.png"
            alt="image"
            width={137}
            height={320}
          />
        </div>
        <div className="shape-img12">
          <Image
            src="/images/shape/shape12.png"
            alt="image"
            width={234}
            height={355}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
