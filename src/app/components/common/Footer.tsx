import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoMail,
  IoCall,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Accordion from "./FooterAccordion";

export default function Footer() {
  const services = [
    {
      name: "Web Development",
      image: "/assets/webdev.png",
      path: "/services/web-development",
      id: "web-development", // Unique ID for submenu
    },
    {
      name: "App Development",
      image: "/assets/appdev.png",
      path: "/services/app-development",
      id: "app-development", // Unique ID for submenu
    },
    {
      name: "Artificial Intelligence",
      image: "/assets/ai.png",
      path: "/services/artificial-intelligence",
      id: "ai", // Unique ID for submenu
    },
    {
      name: "Saas Development",
      image: "/assets/saas.png",
      path: "/services/saas-development",
      id: "saas", // Unique ID for submenu
    },
    {
      name: "Blockchain Development",
      image: "/assets/block.png",
      path: "/services/blockchain-development",
      id: "blockchain", // Unique ID for submenu
    },
    {
      name: "CRM Development",
      image: "/assets/crm.png",
      path: "/services/crm-development",
      id: "crm", // Unique ID for submenu
    },
    {
      name: "UX/UI Designing",
      image: "/assets/ux.png",
      path: "/services/ux-ui-designing",
      id: "ux-ui", // Unique ID for submenu
    },
    {
      name: "Digital Marketing",
      image: "/assets/webdev.png",
      path: "/services/digital-marketing",
      id: "digital-marketing", // Unique ID for submenu
    },
    {
      name: "API Development",
      image: "/assets/api.png",
      path: "/services/api-development",
      id: "api", // Unique ID for submenu
    },
  ];

  const company = [
    { name: "About", url: "/about-us" },
    { name: "Contact Us", url: "/contact-us" },
    // { name: "Careers", url: "/careers" },
    // { name: "Culture", url: "/culture" },
    // { name: "Blog", url: "/blog" },
  ];

  // const support = [
  //   { name: "Getting started", url: "/" },
  //   { name: "Help center", url: "/" },
  //   { name: "Server status", url: "/" },
  //   { name: "Report a bug", url: "/" },
  //   { name: "Chat support", url: "/" },
  // ];

  const servicesNew = [
    {
      title: "IT Services",
      links: [
        {
          label: "Web Development",
          image: "/assets/webdev.png",
          href: "/services/web-development",
          id: "web-development", // Unique ID for submenu
        },
        {
          label: "App Development",
          image: "/assets/appdev.png",
          href: "/services/app-development",
          id: "app-development", // Unique ID for submenu
        },
        {
          label: "Artificial Intelligence",
          image: "/assets/ai.png",
          href: "/services/artificial-intelligence",
          id: "ai", // Unique ID for submenu
        },
        {
          label: "Saas Development",
          image: "/assets/saas.png",
          href: "/services/saas-development",
          id: "saas", // Unique ID for submenu
        },
        {
          label: "Blockchain Development",
          image: "/assets/block.png",
          href: "/services/blockchain-development",
          id: "blockchain", // Unique ID for submenu
        },
        {
          label: "CRM Development",
          image: "/assets/crm.png",
          href: "/services/crm-development",
          id: "crm", // Unique ID for submenu
        },
        {
          label: "UX/UI Designing",
          image: "/assets/ux.png",
          href: "/services/ux-ui-designing",
          id: "ux-ui", // Unique ID for submenu
        },
        {
          label: "Digital Marketing",
          image: "/assets/webdev.png",
          href: "/services/digital-marketing",
          id: "digital-marketing", // Unique ID for submenu
        },
        {
          label: "API Development",
          image: "/assets/api.png",
          href: "/services/api-development",
          id: "api", // Unique ID for submenu
        },
      ],
    },
    {
      title: "Industries",
      links: [
        {
          id: "health-care", // Added id
          label: "Health Care",
          image: "/assets/serve1.png",
          href: "/industries/health-care",
        },
        {
          id: "oil-gas-energy", // Added id
          label: "Oil & Gas Energy",
          image: "/assets/serve2.png",
          href: "/industries/oil-gas-energy",
        },
        {
          id: "retails-e-commerce", // Added id
          label: "Retails & E-Commerce",
          image: "/assets/serve3.png",
          href: "/industries/retails-e-commerce",
        },
        {
          id: "real-estate-construction", // Added id
          label: "Real Estate & Construction",
          image: "/assets/serve4.png",
          href: "/industries/real-estate-construction",
        },
        {
          id: "finance-banking", // Added id
          label: "Finance & Banking",
          image: "/assets/serve5.png",
          href: "/industries/finance-banking",
        },
        {
          id: "government-smart-cities", // Added id
          label: "Goverment & Smart Cities",
          image: "/assets/serve6.png",
          href: "/industries/government-smart-cities",
        },
        {
          id: "education-service", // Added id
          label: "Education Service",
          image: "/assets/serve7.png",
          href: "/industries/education-service",
        },
        // {
        //   id: "logistic-transportation", // Added id
        //   label: "Logistic & Transportation",
        //   image: "/assets/serve8.png",
        //   href: "/industries/logistic-transportation",
        // },
        // {
        //   id: "hospitality-tourism", // Added id
        //   label: "Hospitality & Tourism",
        //   image: "/assets/serve9.png",
        //   href: "/industries/hospitality-tourism",
        // },
        // {
        //   id: "legal-compliance", // Added id
        //   label: "Legal & Compliance",
        //   image: "/assets/serve10.png",
        //   href: "/industries/legal-compliance",
        // },
      ],
    },
  ];

  return (
    <footer className="text-gray-50 font-[poppins] bg-[#242424] py-10 px-4 lg:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7 lg:gap-10 mx-auto">
          <div className="w-full lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/assets/logo/logo.png"
                width={200}
                height={70}
                alt="Above All Agency"
                className="w-40 h-18"
              />
            </div>
            <div>
              <p className="font-[poppins] tracking-wide text-sm/7 text-gray-50 mt-4 lg:mb-2">
                Above All Agency is your trusted IT partner in Sydney, offering
                custom solutions for websites, mobile apps, and advanced
                technologies like AI. Let's create something exceptional
                together!
              </p>
            </div>
          </div>

          <Accordion
            sidebar={true}
            diffColor={true}
            services={servicesNew}
          />

          <div>
            <h3 className="mb-5 text-lg uppercase font-semibold">Company</h3>
            <ul className="text-sm text-gray-200 space-y-3.5">
              {company &&
                company?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="mb-5 text-lg uppercase font-semibold">Support</h3>
            <ul className="text-sm text-gray-200 space-y-3.5">
              {support &&
                support?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div> */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg uppercase font-semibold">Contact Us</h3>
            <div>
              <Link
                href={"mailto:allabove@company.com"}
                className="text-sm mb-2 flex items-center"
              >
                <strong>
                  <IoMailOutline className="text-xl mr-2" />
                </strong>{" "}
                sales@aboveallagency.com.au
              </Link>
              <Link
                href={"tel:0411 537 183"}
                className="text-sm mb-2 flex items-center"
              >
                <strong>
                  <IoCallOutline className="text-xl mr-2" />
                </strong>{" "}
                0411 537 183{" "}
              </Link>
              <p className="text-sm mb-2 flex items-center">
                <strong>
                  <IoLocationOutline className="text-xl mr-2" />
                </strong>{" "}
                U19/10 Gladstone Rd, castle Hill NSW 2154
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="text-white/80">© {new Date().getFullYear()} Above All Agency. All rights reserved.</div>
          <div className="flex space-x-4 text-base mt-2 md:mt-0">
            <Link href="/terms-and-conditions" className="text-[#EE3639] hover:underline">
              Terms & Conditions
            </Link>
            <span className="hidden md:block">|</span>
            <Link href="/privacy-policy" className="text-[#EE3639] hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
