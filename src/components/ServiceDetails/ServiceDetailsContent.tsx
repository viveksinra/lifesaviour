"use client";

import React from "react";
import Image from "next/image";

const ServiceDetailsContent: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>Digital Marketing</h3>
              <p>
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services. The
                customer is king, their lives and needs are the inspiration.
              </p>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Core Development
                </h4>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Define Your Choices
                </h4>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
            </div>

            <div className="services-details-image">
              <Image
                src="/images/about-img1.png"
                alt="image"
                width={830}
                height={750}
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image">
              <Image
                src="/images/why-choose-img1.png"
                alt="image"
                width={830}
                height={750}
              />
            </div>

            <div className="services-details-desc">
              <h3>Social Media Marketing</h3>
              <p>
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services. The
                customer is king, their lives and needs are the inspiration.
              </p>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Core Development
                </h4>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Define Your Choices
                </h4>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
