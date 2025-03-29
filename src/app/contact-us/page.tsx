import React from "react";
import HeroSection from "../components/common/HeroSection";
import ContactSection from "./components/ContactSection";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ];
  return (
    <div>
      <HeroSection
        title=""
        title1=""
        title2="Let’s Connect and Build Something Amazing!"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="Whether you have a query, need support, or want to discuss your next big idea, we’re just a message away. At Above All Agency, we value your input and are eager to assist you. Fill out the form below, and our team will get back to you as soon as possible. Let’s work together to create something extraordinary."
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <ContactSection />
      </div>
    </div>
  );
}
