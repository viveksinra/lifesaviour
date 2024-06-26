"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PricingStyleTwo: React.FC = () => {
  return (
    <>
      <div className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <h2>Choose The Pricing Plan</h2>
            <p>
            At Softechinfra, we offer flexible pricing plans to suit your needs. Whether you're looking for daily, 
            weekly, or monthly services, we've got you covered.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>Daily plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 120 <sub>/ Day</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Web Design
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    IT Consultancy
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Email Integration
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Mobile Apps Development
                  </li>
                  <li>
                    <i className="bx bxs-x-circle"></i>
                    Quick Responses
                  </li>
                  <li>
                    <i className="bx bxs-x-circle"></i>
                    24/7 Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                    Select the plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>Weekly plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 840 <sub>/ Week</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Web Design
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    IT Consultancy
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Email Integration
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Mobile Apps Development
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Quick Responses
                  </li>
                  <li>
                    <i className="bx bxs-x-circle"></i>
                    24/7 Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                    Select the plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>Monthly plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 3,600 <sub> / Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Web Design
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    IT Consultancy
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Email Integration
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Mobile Apps Development
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    Quick Responses
                  </li>
                  <li>
                    <i className="bx bx-badge-check"></i>
                    24/7 Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                    Select the plan
                    <span></span>
                  </Link>
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
      </div>
    </>
  );
};

export default PricingStyleTwo;
