"use client";

// await Keyword:
// await keyword async function ke andar use hota hai.
// jo ek promise ko wait karta hai jab tak wo resolve ya reject nahi ho jata.
// async or await with array method example:
// Axios ek JavaScript library hai jo HTTP requests ko asaan banaata hai
// Axios JavaScript mein HTTP requests ko handle karne ke liye ek powerful aur popular library hai. Iska use karke developers ko HTTP requests ko manage karne mein flexibility aur powerful tools milte hain, jo ki modern web applications ke development mein bahut upyogi sabit ho sakti hai.
import axios from "axios";
import { useEffect, useState } from "react";

const AsyncorAwait = () => {
  const [fetchingdata, setFetchingdata] = useState([]);
  console.log(fetchingdata);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/users");
        setFetchingdata(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default AsyncorAwait;
