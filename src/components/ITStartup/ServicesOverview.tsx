"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesOverview: React.FC = () => {
  return (
    <>
      <div className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box it-overview">
            <div className="overview-content">
              <div className="content">
                <h2>Digital Marketing</h2>
                <p>
                  We believe brand interaction is key to communication. Our approach to digital marketing is centered around
                   meaningful brand interactions,
                   driving real results and enhancing customer experiences.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      SEO Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Email Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Facebook Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Data Scraping
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Social Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Youtube Marketing
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/services/2" className="default-btn">
                    Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service1.png"
                  alt="image"
                  width={852}
                  height={580}
                />
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service2.png"
                  alt="image"
                  width={770}
                  height={582}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>Web Design & Development</h2>
                <p>
                Our design and development services are geared towards fostering brand growth and solving complex challenges.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Responsive Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      UI / UX Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Mobile App Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Laravel Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      React Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Angular Development
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/services/2" className="default-btn">
                    Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div className="overview-content">
              <div className="content">
                <h2>Cloud Storage Service</h2>
                <p>
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Cloud Database
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Hybrid Cloud
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Email Servers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Website Hosting
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      File Storage
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Backup Systems
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/services/2" className="default-btn">
                    Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service3.png"
                  alt="image"
                  width={600}
                  height={463}
                />
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service4.png"
                  alt="image"
                  width={600}
                  height={368}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>SEO Consultancy</h2>
                <p>
                Our SEO consultancy services are aimed at
                 boosting your online presence and driving organic traffic to your website.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Content Marketing
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> SEO Optimization
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Social Marketing
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesOverview;
