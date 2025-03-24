"use client";

import { useState } from "react";
import { Post } from "@/utils/api";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
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

const GetStartedForm = ({ handleClose }: { handleClose: () => void }) => {
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
            handleClose();
            toast.success("Your Query has been submitted!")
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 md:text-2xl">
                        Kickstart Your Vision with Expert Solutions
                    </h2>
                    <RxCross1 onClick={handleClose} className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm pb-1 font-semibold text-gray-800">
                                Full Name*
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                                className="w-full p-3 border text-sm rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm pb-1 font-semibold text-gray-800">
                                Email*
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full p-3 border text-sm rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="text-sm pb-1 font-semibold text-gray-800">
                            Phone Number*
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            maxLength={15}
                            inputMode="numeric"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="w-full p-3 border text-sm rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <label className="text-sm pb-1 font-semibold text-gray-800">
                            Services You Need*
                        </label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {servicesOptions.map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => handleServicesChange(service)}
                                    className={`px-3 py-1.5 text-sm rounded-lg transition ${formData.services.includes(service)
                                        ? "bg-gradient-to-r from-gray-900 to-red-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                        {errors.services && <p className="text-xs text-red-500 mt-1">{errors.services}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="text-sm pb-1 font-semibold text-gray-800">
                            Brief Project Description
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            maxLength={500}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your project"
                            className="w-full p-3 border text-sm rounded-lg border-gray-300 text-gray-500 outline-none focus:ring-2 focus:ring-gray-500"
                            rows={3}
                        />
                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full disabled:cursor-not-allowed disabled:bg-gray-500 flex justify-center items-center gap-2 py-3 px-5 bg-gradient-to-r from-gray-900 to-red-600 text-white font-medium rounded-lg hover:opacity-90 transition"
                    >
                        Start Project
                        <BsArrowRightCircleFill className="text-xl" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GetStartedForm;
