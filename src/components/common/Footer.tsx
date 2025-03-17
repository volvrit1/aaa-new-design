import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IoCall,
  IoCallOutline,
  IoLocationOutline,
  IoMail,
  IoMailOutline,
} from "react-icons/io5";

export default function Footer() {
  const services = [
    { name: "Compline Expert", url: "/" },
    { name: "Start-Up Expert", url: "/" },
    { name: "Technology Expert", url: "/" },
    { name: "Legal Expert", url: "/" },
    { name: "Education Expert", url: "/" },
  ];

  const company = [
    { name: "About", url: "/about-us" },
    { name: "Contact Us", url: "/contact-us" },
    { name: "Careers", url: "/careers" },
    { name: "Culture", url: "/culture" },
    { name: "Blog", url: "/blog" },
  ];

  const support = [
    { name: "Getting started", url: "/" },
    { name: "Help center", url: "/" },
    { name: "Server status", url: "/" },
    { name: "Report a bug", url: "/" },
    { name: "Chat support", url: "/" },
  ];

  return (
    <footer className="text-gray-50 bg-[#242424] py-6 h-[70vh] px-4 lg:px-24 w">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mx-auto">
          <div className="w-full col-span-2">
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
              <p className="text-sm/7 text-gray-50 mb-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                posuere vel venenatis eu sit massa volutpat massa rhoncus odio.
              </p>
              {/* <p className="text-xs text-gray-50 mb-2">
                <strong>Address</strong>: 123 Main St, Anytown, USA 12345
              </p>
              <p className="text-xs text-gray-50 mb-2">
                <strong>Phone</strong>: 555-555-5555
              </p>
              <p className="text-xs text-gray-50 mb-2">
                <strong>Email</strong>: info@company.com
              </p> */}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Services</h3>
            <ul className="text-sm text-gray-200 space-y-3.5">
              {services &&
                services?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Company</h3>
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

          <div>
            <h3 className="mb-2 font-semibold">Support</h3>
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
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Contact Us</h3>
            <div>
              <p className="text-sm text-gray-200 mb-2 flex items-center">
                <strong>
                  <IoMailOutline className="text-xl mr-2" />
                </strong>{" "}
                allabove@company.com
              </p>
              <p className="text-sm text-gray-200 mb-2 flex items-center">
                <strong>
                  <IoCallOutline className="text-xl mr-2" />
                </strong>{" "}
                555-555-5555
              </p>
              <p className="text-sm text-gray-200 mb-2 flex items-center">
                <strong>
                  <IoLocationOutline className="text-xl mr-2" />
                </strong>{" "}
                U19/10 Gladstone Rd, castle Hill NSW 2154
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex justify-between items-center text-sm ">
          <div>Copyright © 2025 All Above Agency</div>
          <div>
            All Rights Reserved |
            <Link href={""} className="text-[#EE3639]">
              Terms and Conditions
            </Link>
            |<Link href={""} className="text-[#EE3639]" > Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
