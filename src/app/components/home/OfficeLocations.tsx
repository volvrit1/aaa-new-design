import Image from "next/image";

const OfficeLocations = () => {
    return (
        <div className="flex container mx-auto items-center justify-center p-4 py-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

                {/* Australia Office - Left Aligned */}
                <div className="flex flex-col items-start text-left">
                    <Image
                        src="/assets/australia.png"
                        alt="Australia Skyline"
                        width={200}
                        height={100}
                        unoptimized
                        priority
                        className="w-full object-contain"
                    />
                    <h2 className="text-2xl text-black font-semibold mt-4">AUSTRALIA</h2>
                    <p className="text-gray-600 text-lg mt-2">
                        U19/10 Gladstone Rd, Castle Hill NSW 2154
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <Image
                            src="/assets/australiaFlag.png"
                            alt="Phone Icon"
                            width={30}
                            height={30}
                            unoptimized
                        />
                        <p className="text-gray-600 text-lg">0411 537 183</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:flex justify-center">
                    <div className="w-[1px] bg-gray-300 h-full"></div>
                </div>

                {/* Dubai Office - Right Aligned */}
                <div className="flex flex-col items-end text-right">
                    <Image
                        src="/assets/dubai.png"
                        alt="Dubai Skyline"
                        width={200}
                        height={100}
                        unoptimized
                        priority
                        className="w-full object-contain"
                    />
                    <h2 className="text-2xl text-black font-semibold mt-4">DUBAI</h2>
                    <p className="text-gray-600 lg:whitespace-nowrap text-lg mt-2">
                        Al Moosa Tower 18th floor Office no #1804,
                        <br />
                        Sheikh Zayed Road, Dubai, U.A.E
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <Image
                            src="/assets/dubaiFlag.png"
                            alt="Phone Icon"
                            width={40}
                            height={40}
                            unoptimized
                        />
                        <p className="text-gray-600 text-lg">+971 055 647 6847</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocations;
