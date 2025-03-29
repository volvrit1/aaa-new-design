// import Faq from "@/app/components/common/Faq";
import Agency from "@/app/components/home/Agency";
import WeServe from "@/app/components/home/WeServe";
import Services from "@/app/components/home/Services";
// import HIreNow from "@/app/components/home/HIreNow";
import WhyChoose from "@/app/components/home/WhyChoose";
import NewProject2 from "./components/home/NewProject2";
// import Contact from "@/app/components/common/Contact";
import HeroSection from "@/app/components/common/HeroSection";
import Achievements from "@/app/components/home/Achievements";
import Testimonials from "@/app/components/home/Testimonials";
import WiningAwards from "@/app/components/home/WiningAwards";
import OurLatestWork from "@/app/components/home/OurLatestWork";
import HomeGetStartedForm from "./components/home/HomeContactUs";
import OfficeLocations from "./components/home/OfficeLocations";

export default function Home() {
  return (
    <div>
      <HeroSection
        title=""
        title1=""
        title2="Your IT Partner for Web Development, Mobile Apps, SaaS, ERP & LMS Solutions in Australia"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We specialize in providing customised IT solutions that drive business growth and transform the digital experience. It is either web development or mobile application development, SaaS, ERP, or LMS platforms that we provide full solutions that empower Australia based companies to cope with the speed of technological growth of today"
        link={"tel:0411 537 183"}
      />
      <div className="bg-white">
        <Agency />
        <Services />
        {/* <HIreNow /> */}
        <NewProject2 />
        <Achievements />
        <WhyChoose />
        <OurLatestWork />
        <WiningAwards />
        <WeServe />
        <Testimonials />
        {/* <Faq /> */}
        {/* <Contact /> */}
        <HomeGetStartedForm />
        <OfficeLocations />
      </div>
    </div>
  );
}
