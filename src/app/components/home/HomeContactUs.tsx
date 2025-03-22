"use client";

import Image from "next/image";
import { useState } from "react";
import { Post } from "@/utils/api";
import { toast } from "react-toastify";
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

const HomeGetStartedForm = () => {
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
        <div className="flex items-center justify-center container p-4 lg:px-16 mx-auto">
            <div className="flex justify-center items-center">
                <div className="w-full lg:w-2/3 bg-blue-50 p-5 lg:p-14 rounded-r-4xl lg:rounded-r-none lg:rounded-l-4xl">
                    <h2 className="text-lg font-bold text-gray-900 md:text-2xl">
                        Connect With Us Today
                    </h2>
                    <p className="text-gray-500 text-sm pb-5 pt-2">Ready to turn your ideas into reality? Contact us for expert solutions and customized services that go above and beyond.
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
                                    className="w-full p-3 border text-sm bg-white rounded-lg border-white shadow-md text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
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
                                    className="w-full p-3 border text-sm bg-white rounded-lg border-white shadow-md text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
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
                                className="w-full p-3 border text-sm bg-white rounded-lg border-white shadow-md text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
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
                                            ? "bg-blue-500 text-white"
                                            : "bg-white text-gray-600"
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
                                className="w-full p-3 border text-sm bg-white rounded-lg border-white shadow-md text-gray-500 outline-none focus:ring-2 focus:ring-blue-300"
                                rows={5}
                            />
                            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full disabled:cursor-not-allowed disabled:bg-gray-500 flex justify-center items-center gap-2 py-3 px-5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition"
                        >
                            Start Project
                            <BsArrowRightCircleFill className="text-xl" />
                        </button>
                    </form>
                </div>
                <div className="hidden lg:block w-1/2">
                    <Image
                        width={400}
                        height={400}
                        alt="image"
                        src={"/assets/IMG_8896.PNG"}
                        className="w-full rounded-tr-4xl object-contain"
                    />
                    <Image
                        width={400}
                        height={400}
                        alt="image"
                        src={"/assets/IMG_8895.PNG"}
                        className="w-full rounded-br-4xl object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeGetStartedForm;
