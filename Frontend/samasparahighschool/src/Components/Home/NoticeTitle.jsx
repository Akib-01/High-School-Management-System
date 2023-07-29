import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NoticeTitle() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:8000/notice/get")
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
  return (
    <>
      {Object.values(data).map((item) => {
        return (
          <>
            <Link to={"/notice"} state={{ id: item.id }}>
              <div class="flex flex-row items-center bg-[#FFFFFF] rounded-xl shadow-xl shadow-slate-400  p-3 cursor-pointer">
                <div class="text-lg text-white font-medium bg-blue-800 rounded-lg p-1 flex-none">
                  {moment(item.date).format("DD|MM")}
                </div>
                &nbsp;&nbsp;&nbsp;
                <div class="text-xl font-bold text-gray-800 ">{item.title}</div>
              </div>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
}
