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
        title="Get in"
        title1=" Touch with Us –"
        title2="We're Here to Assist You Every Step of the Way"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <ContactSection />
    </div>
  );
}
