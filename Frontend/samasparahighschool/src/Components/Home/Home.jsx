import React from "react";
import NoticeTitle from "./NoticeTitle";
import Slider from "./Slider";
export default function Home() {
  return (
    <div>
      <div className="h-96 md:slider-body font-Roboto">
        <Slider />
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
                <NoticeTitle />
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
