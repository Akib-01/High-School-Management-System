import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slides } from "./SlideData";
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const len = slides.length;
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === len - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, len]);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className=" group-hover:block absolute top-[35%] sm:top-[40%]  md:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=" group-hover:block absolute top-[35%] sm:top-[40%] md:top-[50%] -translate-x-0 translate-y-[-50%]  right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </>
  );
}
