"use client";
import { Post } from "@/utils/api";
import Link from "next/link";
import { useState } from "react";
import { FaFax } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res: any = await Post("api/contact", formData, 5000);
      if (res?.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        toast.success("Submission successful");
        console.log("Submission successful", res);
      } else {
        console.log("Submission failed", res);
      }
    } catch (error) {
      console.log("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto relative overflow-hidden p-4 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 rounded-3xl">
        <div className="p-4 lg:p-10 border rounded-2xl min-h-[80vh]">
          <h2 className="text-xl font-bold text-gray-900 mb-12">
            Get in <span className="text-[#EE3639]">Touch With Us</span>
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
                className="w-full p-2 bg-[#D9D9D980] rounded outline-none text-gray-600"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
                className="w-full p-2 bg-[#D9D9D980] rounded outline-none text-gray-600"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-2 bg-[#D9D9D980] rounded outline-none text-gray-600"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              value={formData.message}
              rows={8}
              className="w-full p-2 bg-[#D9D9D980] rounded outline-none text-gray-600"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 border bg-[#EE3639] hover:bg-gray-400 transition-colors ease-in-out text-white font-semibold rounded-lg "
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="py-4 relative">
          <div className="w-full h-full bg-gray-200 rounded-r-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.021973796334!2d150.9718427746137!3d-33.73424791210037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1ec561ee8ad%3A0xd3a2253eb1ba9dbd!2s10%20Gladstone%20Rd%2C%20Castle%20Hill%20NSW%202164%2C%20Australia!5e0!3m2!1sen!2sin!4v1742380419831!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              className="w-full h-full bg-gray-200 rounded-r-lg overflow-hidden"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center pt-20">
          <div className="mb-2">
            <IoLocation
              width={50}
              height={50}
              className="bg-[#EE363933] inline-block text-2xl rounded-full p-1"
            />{" "}
            <span>Office Address</span>
          </div>
          <p className="font-[cabin] tracking-widest text-xs text-gray-500">
            U19/10 Gladstone Rd, castle Hill NSW 2154
          </p>
        </div>
        <Link href={"mailto:www.allaboveagency.com"}>
          <div className="flex flex-col justify-center pt-20">
            <div className="mb-2">
              <IoMail
                width={50}
                height={50}
                className="bg-[#EE363933] inline-block text-2xl rounded-full p-1"
              />{" "}
              <span>Email address</span>
            </div>
            <p className="font-[cabin] tracking-widest text-xs text-gray-500">
              www.allaboveagency.com
            </p>
          </div>
        </Link>
        <Link href={"tel:0411 537 183"}>
          <div className="flex flex-col justify-center pt-20">
            <div className="mb-2">
              <IoCall
                width={50}
                height={50}
                className="bg-[#EE363933] inline-block text-2xl rounded-full p-1"
              />{" "}
              <span>Office Address</span>
            </div>
            <p className="font-[cabin] tracking-widest text-xs text-gray-500">
              0411 537 183{" "}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
