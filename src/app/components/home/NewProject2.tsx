import ButtonToCall from "./ButtonToCall";

export default function NewProject2() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className=" m-auto p-18  rounded-3xl text-center">
        <h2
          className={`lg:w-full m-auto text-xl sm:text-2xl md:text-2xl lg:text-5xl font-[poppins] font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800"> Let's Start a </span>
          {" New Project Together "}
        </h2>
        <p
          className={`lg:w-4/5 text-gray-800 text-sm sm:text-lg md:text-xl lg:text-lg py-5 line-clamp-3 md:line-clamp-none font-[poppins] tracking-widest  mt-4 mb-6 m-auto leading-5`}
        >
          {
            "Ready to turn your ideas into reality? Let’s collaborate and create something amazing! With our expertise and your vision, we’ll build a solution that drives success and stands out in the digital world."
          }
        </p>
        <ButtonToCall />
      </div>
    </div>
  );
}
