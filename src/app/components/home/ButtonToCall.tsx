"use client";

import Modal from "./Modal";
import GetStartedForm from "./ContactUs";
import React, { useEffect, useState } from "react";

const ButtonToCall = ({ text = "Request A Quote" }: any) => {
    const [showModal, setShowModal] = useState(false);
    const handleIOpenModal = () => { setShowModal(!showModal) }

    useEffect(() => {
        if (showModal) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [showModal])

    return (
        <div className="flex justify-center items-center">
            <Modal width="w-auto" hidePadding={true} isVisible={showModal} onClose={handleIOpenModal}>
                <GetStartedForm handleClose={handleIOpenModal} />
            </Modal>
            <button
                onClick={handleIOpenModal}
                className="px-10 p-4 text-sm text-center border-[#EE3639] bg-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent border transition-colors ease-in-out flex justify-center items-center"
            >
                {text}
            </button>
        </div>
    )
}

export default ButtonToCall