import React from "react";
import ChairmansMessage from "../About/Chairman'sMessage";
import HeadmastersMessage from "../About/Headmaster'sMessage";
import Events from "./Events";
import InfoBar from "./InfoBar";
import NoticeTitle from "./NoticeTitle";
import Slider from "./Slider";

export default function Home() {
  return (
    <div>
      <div className="h-96 md:slider-body font-Roboto">
        <Slider />
      </div>
      <div>
        <InfoBar />
      </div>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-4 py-6 bg-slate-100">
        <div className="h-auto md:col-span-1">
          <div className="mb-4">
            <span className="text-blue-800 font-bold text-2xl">Notices</span>
          </div>
          <div className="border border-gray-500 border-solid p-4">
            <NoticeTitle />
          </div>
        </div>
        <div className="h-auto md:col-span-1">
          <div className="mb-4">
            <span className="text-blue-800 font-bold text-2xl">Events</span>
          </div>
          <div>
            <Events />
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 gap-2">
          {/* HeadmastersMessage now spans two columns */}
          <div className="w-[1200px] md:col-span-1">
            <HeadmastersMessage />
          </div>
          <div className="md:col-span-1">
            <ChairmansMessage />
          </div>
        </div>
      </div>
    </div>
  );
}
