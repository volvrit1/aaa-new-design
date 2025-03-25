"use client";

import Link from "next/link";
import { useState } from "react";
import { Post } from "@/utils/api";
import { FaFax } from "react-icons/fa";
import { toast } from "react-toastify";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";

import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
}

const servicesOptions = [
  "App Development",
  "Web Development",
  "API Development",
  "Digital Marketing",
  "CRM Development",
  "UI/UX Design",
];

const ContactSection = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServicesChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormValues> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email.";
    if (formData.phone.length < 10) newErrors.phone = "Enter a valid phone number.";
    if (formData.services.length === 0) newErrors.services = ["Select at least one service."];
    if (formData.message.length < 10) newErrors.message = "Message should be descriptive.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setErrors({});
      setLoading(true);
      const data: any = { ...formData, service: formData.services.join(", ") };
      delete data.services;
      const response: any = await Post("/api/send-email", data);
      if (response?.message) toast.success(response.message);
      setFormData({ name: "", email: "", phone: "", services: [], message: "" });
      toast.success("Your Query has been submitted!")
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto relative overflow-hidden p-4 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 rounded-3xl">
        <div className="p-4 lg:p-12 border rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Get in <span className="text-[#EE3639]">Touch With Us</span>
          </h2>
          <p className="text-gray-500 text-sm pb-5 pt-3">Ready to turn your ideas into reality? Contact us for expert solutions and customized services that go above and beyond.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="w-full p-3 border text-sm bg-white rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full p-3 border text-sm bg-white rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <input
                id="phone"
                name="phone"
                type="text"
                maxLength={15}
                inputMode="numeric"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full p-3 border text-sm bg-white rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="text-sm pb-1 text-black">
                Services You Need*
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {servicesOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServicesChange(service)}
                    className={`px-4 py-2 text-sm rounded-lg transition ${formData.services.includes(service)
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              {errors.services && <p className="text-xs text-red-500 mt-1">{errors.services}</p>}
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                maxLength={500}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project"
                className="w-full p-3 border text-sm bg-white rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
                rows={5}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full disabled:cursor-not-allowed disabled:bg-gray-500 flex justify-center items-center gap-2 py-3 px-5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg hover:opacity-90 transition"
            >
              Submit
              <BsArrowRightCircleFill className="text-xl" />
            </button>
          </form>
        </div>
        <div className="py-4 lg:py-16 relative">
          <div className="w-full aspect-square bg-gray-200 rounded-r-lg overflow-hidden">
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

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-20 py-5 lg:py-10">
        {/* Office Address */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-3">
            <IoLocation className="bg-black text-white text-2xl rounded-full p-2 w-10 h-10" />
            <span className="text-black text-lg font-medium">Office Address</span>
          </div>
          <p className="font-[poppins] tracking-widest text-xs text-gray-500 mt-1">
            U19/10 Gladstone Rd, Castle Hill NSW 2154
          </p>
        </div>

        {/* Email Address */}
        <Link href="mailto:www.allaboveagency.com" className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-3">
            <IoMail className="bg-black text-white text-2xl rounded-full p-2 w-10 h-10" />
            <span className="text-black text-lg font-medium">Email Address</span>
          </div>
          <p className="font-[poppins] tracking-widest text-xs text-gray-500 mt-1">
            www.allaboveagency.com.au
          </p>
        </Link>

        {/* Phone Number */}
        <Link href="tel:0411 537 183" className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-3">
            <IoCall className="bg-black text-white text-2xl rounded-full p-2 w-10 h-10" />
            <span className="text-black text-lg font-medium">Phone</span>
          </div>
          <p className="font-[poppins] tracking-widest text-xs text-gray-500 mt-1">
            0411 537 183
          </p>
        </Link>
      </div>

    </div>
  );
};

export default ContactSection;
