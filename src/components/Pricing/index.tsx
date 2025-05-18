"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Transparent Pricing"
          paragraph="Choose the plan that fits your learning journey. All Pathwise plans include 1:1 mentorship, project guidance, and test prep support."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "₹3,999" : "₹42,000"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for self-driven students who want expert guidance once a week."
          >
            <OfferList text="1 mentoring session/week" status="active" />
            <OfferList text="Access to project templates" status="active" />
            <OfferList text="Weekly email check-ins" status="active" />
            <OfferList text="Parent progress summary" status="active" />
            <OfferList text="Custom learning dashboard" status="inactive" />
            <OfferList text="Unlimited test prep sessions" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Standard"
            price={isMonthly ? "₹6,999" : "₹74,000"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for students preparing for exams or university applications."
          >
            <OfferList text="2 mentoring sessions/week" status="active" />
            <OfferList text="Custom learning dashboard" status="active" />
            <OfferList text="College prep & essay support" status="active" />
            <OfferList text="Unlimited test prep sessions" status="active" />
            <OfferList text="Parent progress summary" status="active" />
            <OfferList text="Real-world project publishing" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Premier"
            price={isMonthly ? "₹10,999" : "₹1,15,000"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Best for ambitious learners seeking elite admissions or research output."
          >
            <OfferList text="3 mentoring sessions/week" status="active" />
            <OfferList text="Dedicated academic coach" status="active" />
            <OfferList text="Research & journal submission support" status="active" />
            <OfferList text="Portfolio & project showcase" status="active" />
            <OfferList text="Unlimited test prep sessions" status="active" />
            <OfferList text="Parent strategy meetings" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
