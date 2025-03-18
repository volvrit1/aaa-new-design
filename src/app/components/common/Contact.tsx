"use client";

import Image from "next/image";
import { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // Stop form submission if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // try {
    //   const data = {
    //     name: formData.name,
    //     phone: formData.phone,
    //     email: formData.email,
    //     company_name: formData.companyName,
    //     message: formData.message,
    //     service: "Ar Vr",
    //   };

    //   const response: any = await Post(
    //     "https://crm.volvrit.com/api/contact-us",
    //     data
    //   );

    //   if (response?.message) toast.success(response?.message);

    //   // Reset form only after successful submission
    //   setFormData({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     companyName: "",
    //     subject: "",
    //     message: "",
    //   });

    //   setSubmitted(true);
    // } catch (error) {
    //   console.error("Form submission error:", error);
    // }
  };

  return (
    <div id="contact" className="max-w-7xl m-auto p-4 lg:p-24 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10">
        <div>
          <div className="rounded-r-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-2xl lg:text-2xl mb-4 font-semibold text-left col-span-2">
              We're Here to Help Get in Touch
              {/* <br />
              <span className="text-gray-500 not-italic ">Get in Touch</span> */}
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 p-4 text-gray-700">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-transparent border border-gray-200 rounded-lg   p-2 w-full"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firsName}</p>
                )}
              </div>
              <div>
                <label className="block">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-transparent border border-gray-200 rounded-lg   p-2 w-full"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-transparent border border-gray-200 rounded-lg   p-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block">Phone number</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10 digit password"
                className="bg-transparent border border-gray-200 rounded-lg   p-2 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Write subject"
                className="bg-transparent border border-gray-200 rounded-lg   p-2 w-full"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div>
              <label className="block">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write here..."
                className="bg-transparent border border-gray-200 rounded-lg   p-2 w-full"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              aria-label="Contact Us"
              className={`bg-gray-900 flex justify-center items-center gap-2 text-gray-50 rounded-full p-2 px-12 `}
            >
              Send <BsArrowUpRightCircle />
            </button>
          </form>
        </div>
        <Image
          width={400}
          height={400}
          alt="image"
          src={"/assets/contact.png"}
          className="w-full  object-fill rounded-xl"
        />
      </div>
    </div>
  );
};

export default Contact;
