import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    axios
      .get("https://localhost:44379/api/notice/")
      .then((res) => {
        console.log(res.data);
        setData(
          res.data
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 10)
        );
      })
      .catch((err) => {
        console.log("something went Wrong");
      });
  });
  //console.log(data);
  /*const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };*/
  return (
    <div>
      <div className="h-96 md:slider-body font-Roboto">
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
        {/*<div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
          </div>*/}
      </div>
      <div className="h-8"></div>
      <div className="">
        <div className="flex justify-items-center justify-center">
          <div className="grid md:grid-cols-8 gap-2 w-[370px] sm:w-[500px] md:w-[1250px]  ">
            <div className="h-[700px] md:col-start-1 md:col-end-5">
              <div className="">
                <span className="text-blue-800 font-bold text-2xl">
                  Notices
                </span>
              </div>
              <div className="">
                {Object.values(data).map((item) => {
                  return (
                    <>
                      <Link to={"/notice"} state={{ id: item.id }}>
                        <div class="flex flex-row items-center bg-[#FFFFFF] rounded-xl shadow-xl shadow-slate-400  p-3 cursor-pointer">
                          <div class="text-lg text-white font-medium bg-blue-800 rounded-lg p-1 flex-none">
                            {moment(item.date).format("DD|MM")}
                          </div>
                          &nbsp;&nbsp;&nbsp;
                          <div class="text-xl font-bold text-gray-800 ">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                      <br />
                    </>
                  );
                })}
              </div>
              <div className=""></div>
            </div>
            <div className="h-[700px] md:col-start-5 md:col-end-9">
              <div className="">
                <span className="text-blue-800 font-bold text-2xl">Events</span>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
