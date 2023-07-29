import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NoticeTitle() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/notices/get")
      .then((res) => {
        const noticesArray = res.data;
        setData(
          noticesArray
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 10)
        );
      })
      .catch((err) => {
        console.log("something went Wrong", err);
      });
  }, []);
  return (
    <>
      {data.map((mapper) => {
        return (
          <div key={mapper.id}>
            {console.log("before", mapper.title)}
            <Link to={"/notice"} state={{ id: mapper.id }}>
              <div className="flex flex-row mapper-center bg-[#FFFFFF] rounded-xl shadow-xl shadow-slate-400 p-3 cursor-pointer">
                <div className="text-lg text-white font-medium bg-blue-800 rounded-lg p-1 flex-none">
                  {moment(mapper.date).format("DD|MM")}
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="text-xl font-bold text-gray-800">
                  {mapper.title}
                </div>
              </div>
            </Link>
            <br />
          </div>
        );
      })}
    </>
  );
}
