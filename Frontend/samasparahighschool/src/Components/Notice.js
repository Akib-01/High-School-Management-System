import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Notice() {
  const location = useLocation();

  //const view = location && location.state ? location.state.id : null;
  const [data, setData] = useState("");
  useEffect(() => {
    const itemId = location && location.state ? location.state.id : null;
    axios
      .get(`https://localhost:44379/api/notice/${itemId}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log("something went Wrong");
      });
  });

  return <div>Notice</div>;
}

export default Notice;
